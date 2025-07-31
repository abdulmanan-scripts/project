import React from 'react';
import StrategyCallModal from './StrategyCallModal';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FinalCTA = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const benefits = [
    "Free consultation",
    "No obligation",
    "Expert advice",
    "Custom strategy"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"
      />
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">Ready to Get Started?</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Ready to Transform Your Online Presence?
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            See if Design Syncs is right for you. Book a free strategy session and discover how we can help your business grow with a website that actually works.
            See if PixelNova Studio is right for you. Book a free strategy session and discover how we can help your business grow with a website that actually works.
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                  Start Your Project Today
                </CardTitle>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">Trusted by 200+ businesses</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input 
                  placeholder="Your Name"
                  className="h-12"
                />
                <Input 
                  type="email" 
                  placeholder="Your Email"
                  className="h-12"
                />
                <Input 
                  type="tel" 
                  placeholder="Your Phone"
                  className="h-12"
                />
                <Button 
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg group"
                  onClick={() => setIsModalOpen(true)}
                >
                  Get My Free Strategy Session
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
      {/* Strategy Call Modal */}
      <StrategyCallModal open={isModalOpen} onOpenChange={setIsModalOpen} />
                <p className="text-xs text-gray-500 text-center">
                  No spam, unsubscribe at any time
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-6">
                What You'll Get:
              </h3>
            </motion.div>
            
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-4 text-blue-100"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-green-500 rounded-full p-2"
                >
                  <CheckCircle className="w-5 h-5 text-white" />
                </motion.div>
                <span className="text-lg font-medium">{benefit}</span>
              </motion.div>
            ))}
            
            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 bg-white/10 rounded-lg backdrop-blur-sm"
            >
              <h4 className="text-lg font-semibold text-white mb-2">
                🚀 Limited Time Offer
              </h4>
              <p className="text-blue-100">
                Book your strategy call this month and receive a complimentary website audit worth $500!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;