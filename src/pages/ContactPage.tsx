import React from 'react';
import { motion } from 'framer-motion';
import FinalCTA from '../components/FinalCTA';
import StrategyCallModal from '../components/StrategyCallModal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Mail, MapPin, Phone, Clock, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@pixelnovastudio.com",
      description: "Send us an email anytime"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 hours",
      description: "We respond to all inquiries quickly"
    }
  ];

  const benefits = [
    "Free 30-minute consultation",
    "Custom strategy for your business",
    "No obligation or pressure",
    "Same-day response guaranteed"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cosmic-background via-white to-cosmic-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ 
              perspective: '1000px',
              transformStyle: 'preserve-3d'
            }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-cosmic-text mb-6">
              Contact <span className="bg-gradient-to-r from-cosmic-primary to-cosmic-secondary bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to transform your online presence? Let's discuss how we can help your business grow with a website that actually works.
            </p>
            <Button 
              size="lg" 
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-cosmic-primary to-cosmic-secondary hover:from-cosmic-primary/90 hover:to-cosmic-secondary/90 text-white font-semibold text-xl px-8 py-6 shadow-2xl transform-gpu hover:scale-105 hover:translate-z-2 transition-all duration-300"
            >
              Book a Strategy Call
              <Calendar className="ml-2 h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  z: 25
                }}
                style={{ 
                  perspective: '1000px',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Card className="text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-r from-cosmic-primary to-cosmic-secondary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                    <p className="text-cosmic-primary font-semibold mb-2">{info.details}</p>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Benefits Cards */}
            {benefits.slice(0, 2).map((benefit, index) => (
              <motion.div
                key={index + 2}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 2) * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 8,
                  z: 20
                }}
                style={{ 
                  perspective: '1000px',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Card className="text-center shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-green-50 to-blue-50 transform-gpu">
                  <CardContent className="p-6">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <p className="text-gray-700 font-medium">{benefit}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ 
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              <Card className="shadow-2xl border-0 transform-gpu hover:scale-105 hover:rotateY-5 hover:shadow-3xl transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-cosmic-primary">
                    Send Us a Message
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your Name" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" className="h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-cosmic-secondary"
                    />
                  </div>
                  <Button className="w-full h-12 bg-gradient-to-r from-cosmic-primary to-cosmic-secondary hover:from-cosmic-primary/90 hover:to-cosmic-secondary/90 text-white font-semibold">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ 
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-cosmic-primary mb-4">
                  Why Choose PixelNova Studio?
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 transform-gpu hover:scale-105 hover:rotateY-3 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-cosmic-primary mb-3">
                    🚀 Ready to Get Started?
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Skip the form and book a direct strategy call with our team. We'll discuss your project and provide immediate insights.
                  </p>
                  <Button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-gradient-to-r from-cosmic-primary to-cosmic-secondary hover:from-cosmic-primary/90 hover:to-cosmic-secondary/90 text-white font-semibold"
                  >
                    Book Strategy Call Now
                    <Calendar className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <FinalCTA />

      <StrategyCallModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
      />
    </div>
  );
};

export default ContactPage;