import React from 'react';
import { motion } from 'framer-motion';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import StrategyCallModal from '../components/StrategyCallModal';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Star, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PortfolioPage = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const stats = [
    { icon: TrendingUp, value: "200%", label: "Average ROI Increase", color: "text-green-500" },
    { icon: Star, value: "50+", label: "Successful Projects", color: "text-blue-500" },
    { icon: TrendingUp, value: "95%", label: "Client Satisfaction", color: "text-purple-500" }
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
              Our <span className="bg-gradient-to-r from-cosmic-primary to-cosmic-secondary bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how we've helped businesses like yours achieve remarkable results with custom web solutions that drive growth and success.
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

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 8,
                  z: 25
                }}
                style={{ 
                  perspective: '1000px',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Card className="text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu">
                  <CardContent className="p-8">
                    <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                    <div className="text-4xl font-bold text-cosmic-primary mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      {/* Testimonials Section */}
      <Testimonials />

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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's create a website that delivers the same outstanding results for your business.
            </p>
            <Button 
              size="lg" 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-cosmic-primary hover:bg-gray-100 font-semibold text-xl px-8 py-6 shadow-2xl"
            >
              Start Your Project Today
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

export default PortfolioPage;