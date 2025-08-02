import React from 'react';
import { motion } from 'framer-motion';
import Services from '../components/Services';
import Features from '../components/Features';
import StrategyCallModal from '../components/StrategyCallModal';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesPage = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const serviceHighlights = [
    "Custom web design tailored to your brand",
    "Mobile-first responsive development",
    "SEO optimization for better visibility",
    "E-commerce solutions that convert",
    "Ongoing maintenance and support",
    "Performance optimization for speed"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cosmic-background via-white to-cosmic-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-cosmic-text mb-6">
                Our <span className="bg-gradient-to-r from-cosmic-primary to-cosmic-secondary bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive web solutions designed to grow your business and establish your dominant online presence.
              </p>
              <Button 
                size="lg" 
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-cosmic-primary to-cosmic-secondary hover:from-cosmic-primary/90 hover:to-cosmic-secondary/90 text-white font-semibold text-xl px-8 py-6 shadow-2xl"
              >
                Book a Strategy Call
                <Calendar className="ml-2 h-6 w-6" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-cosmic-primary mb-6">
                    What We Deliver:
                  </h3>
                  <div className="space-y-4">
                    {serviceHighlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Features Section */}
      <Features />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your project and create a custom solution that drives results.
            </p>
            <Button 
              size="lg" 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-cosmic-primary hover:bg-gray-100 font-semibold text-xl px-8 py-6 shadow-2xl"
            >
              Book Your Free Consultation
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </section>

      <StrategyCallModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
      />
    </div>
  );
};

export default ServicesPage;