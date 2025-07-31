import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Calendar, Clock, CheckCircle, Sparkles, ArrowRight, Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase, type StrategyCallLead } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  full_name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  budget: z.string().min(1, 'Please select a budget range'),
  company: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface StrategyCallModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const StrategyCallModal: React.FC<StrategyCallModalProps> = ({ open, onOpenChange }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const watchedBudget = watch('budget');

  const benefits = [
    { icon: CheckCircle, text: "Free 30-minute consultation", color: "text-green-500" },
    { icon: Sparkles, text: "Custom growth strategy", color: "text-purple-500" },
    { icon: Calendar, text: "No obligation required", color: "text-blue-500" },
    { icon: Clock, text: "Same-day response", color: "text-orange-500" },
  ];

  const budgetOptions = [
    { value: "500-1k", label: "$500 - $1,000", popular: false },
    { value: "1k-2.5k", label: "$1,000 - $2,500", popular: true },
    { value: "2.5k-5k", label: "$2,500 - $5,000", popular: false },
    { value: "5k+", label: "$5,000+", popular: false },
  ];

  const [bookingDate, setBookingDate] = useState("");
  const [bookingDateError, setBookingDateError] = useState("");
  const onSubmit = async (data: FormData) => {
    setBookingDateError("");
    if (!bookingDate) {
      setBookingDateError("Please select a preferred date and time for your call.");
      setIsSubmitting(false);
      return;
    }
    setIsSubmitting(true);
    try {
      const leadData: StrategyCallLead = {
        full_name: data.full_name,
        email: data.email,
        phone: data.phone,
        budget: data.budget,
        company: data.company || '',
        message: (data.message || '') + (bookingDate ? `\nBooking call date: ${bookingDate}` : ''),
      };

      const { error } = await supabase
        .from('strategy_call_leads')
        .insert([leadData]);

      if (error) {
        throw error;
      }

      setStep(3); // Success step
      toast({
        title: "Strategy Call Booked! 🎉",
        description: "We'll contact you within 24 hours to schedule your free consultation.",
      });

      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        reset();
        setStep(1);
        setBookingDate("");
        setBookingDateError("");
        onOpenChange(false);
      }, 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-gradient-to-br from-cosmic-background to-white border-0 shadow-2xl">
        <div className="relative">
          {/* Header with gradient background */}
          <div className="bg-gradient-to-r from-cosmic-primary to-cosmic-secondary p-6 text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-cosmic-accent" />
                Book Your Free Strategy Call
              </DialogTitle>
              <DialogDescription className="text-blue-100 text-base">
                Get a custom growth plan for your business in just 30 minutes
              </DialogDescription>
            </DialogHeader>
          </div>

          {/* Progress indicator */}
          <div className="px-6 py-4 bg-gray-50">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <motion.div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step >= stepNumber
                        ? 'bg-cosmic-secondary text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                    animate={{ scale: step === stepNumber ? 1.1 : 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {step > stepNumber ? <CheckCircle className="w-4 h-4" /> : stepNumber}
                  </motion.div>
                  {stepNumber < 3 && (
                    <div className={`w-16 h-1 mx-2 ${
                      step > stepNumber ? 'bg-cosmic-secondary' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-600">
              <span>Contact Info</span>
              <span>Project Details</span>
              <span>Confirmation</span>
            </div>
          </div>

          {/* Form content */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="full_name">Full Name *</Label>
                      <Input
                        id="full_name"
                        {...register('full_name')}
                        placeholder="John Doe"
                        className="h-12"
                      />
                      {errors.full_name && (
                        <p className="text-sm text-red-500">{errors.full_name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input
                        id="company"
                        {...register('company')}
                        placeholder="Your Company"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      placeholder="john@company.com"
                      className="h-12"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register('phone')}
                      placeholder="+1 (555) 123-4567"
                      className="h-12"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500">{errors.phone.message}</p>
                    )}
                  </div>

                  <Button
                    onClick={async () => {
                      const valid = await trigger(["full_name", "email", "phone"]);
                      if (valid) {
                        setStep(2);
                      }
                    }}
                    className="w-full h-12 bg-gradient-to-r from-cosmic-primary to-cosmic-secondary hover:from-cosmic-primary/90 hover:to-cosmic-secondary/90 text-white font-semibold"
                  >
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <Label>Project Budget *</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {budgetOptions.map((option) => (
                        <motion.div
                          key={option.value}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Card
                            className={`cursor-pointer transition-all duration-200 ${
                              watchedBudget === option.value
                                ? 'ring-2 ring-cosmic-secondary bg-cosmic-secondary/5'
                                : 'hover:shadow-md'
                            }`}
                            onClick={() => setValue('budget', option.value)}
                          >
                            <CardContent className="p-4 text-center relative">
                              {option.popular && (
                                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-cosmic-accent text-cosmic-primary">
                                  Popular
                                </Badge>
                              )}
                              <div className="font-semibold text-sm">{option.label}</div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                    {errors.budget && (
                      <p className="text-sm text-red-500">{errors.budget.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="booking-date">Preferred Date & Time for Call *</Label>
                    <input
                      id="booking-date"
                      type="datetime-local"
                      value={bookingDate}
                      onChange={e => {
                        setBookingDate(e.target.value);
                        if (e.target.value) setBookingDateError("");
                      }}
                      className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cosmic-secondary"
                      required
                    />
                    {bookingDateError && (
                      <p className="text-sm text-red-500 mt-1">{bookingDateError}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your project (Optional)</Label>
                    <textarea
                      id="message"
                      {...register('message')}
                      placeholder="Describe your goals, challenges, or any specific requirements..."
                      className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-cosmic-secondary"
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="flex-1 h-12"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleSubmit(onSubmit)}
                      disabled={isSubmitting || !bookingDate}
                      className="flex-1 h-12 bg-gradient-to-r from-cosmic-primary to-cosmic-secondary hover:from-cosmic-primary/90 hover:to-cosmic-secondary/90 text-white font-semibold"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Booking...
                        </>
                      ) : (
                        <>
                          Book My Call
                          <Calendar className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-center space-y-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto"
                  >
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </motion.div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Strategy Call Booked! 🎉
                    </h3>
                    <p className="text-gray-600">
                      We'll contact you within 24 hours to schedule your free consultation.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-cosmic-primary/10 to-cosmic-secondary/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-cosmic-primary mb-2">What happens next?</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ We'll review your information</li>
                      <li>✓ Schedule a convenient time for your call</li>
                      <li>✓ Prepare a custom strategy for your business</li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Benefits sidebar */}
          {step < 3 && (
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 border-t">
              <h4 className="font-semibold text-gray-900 mb-4">What you'll get:</h4>
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <benefit.icon className={`w-4 h-4 ${benefit.color}`} />
                    <span className="text-sm text-gray-700">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StrategyCallModal;