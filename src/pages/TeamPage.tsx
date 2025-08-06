import React from 'react';
import { motion } from 'framer-motion';
import Team from '../components/Team';
import StrategyCallModal from '../components/StrategyCallModal';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import ThreeScene from '../components/ThreeScene';
import GSAPAnimations from '../components/GSAPAnimations';

const TeamPage = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cosmic-background via-white to-cosmic-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="absolute top-20 right-20 w-48 h-48 opacity-30">
            <ThreeScene animation="rotate" color="#5D3FD3" size={1.3} />
          </div>
          <GSAPAnimations animation="fadeInUp" duration={1.2}>
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
              Meet Our <span className="bg-gradient-to-r from-cosmic-primary to-cosmic-secondary bg-clip-text text-transparent">Expert Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              The talented professionals behind every successful project. We're passionate about delivering exceptional results and helping your business grow.
            </p>
            <Button 
              size="lg" 
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-cosmic-primary to-cosmic-secondary hover:from-cosmic-primary/90 hover:to-cosmic-secondary/90 text-white font-semibold text-xl px-8 py-6 shadow-2xl transform-gpu hover:scale-105 hover:translate-z-2 hover:shadow-3xl transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 20
              }}
            >
              Book a Strategy Call
              <Calendar className="ml-2 h-6 w-6" />
            </Button>
          </motion.div>
          </GSAPAnimations>
        </div>
      </section>

      {/* Team Section */}
      <Team />

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
              Ready to Work With Our Team?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our expertise can help transform your business online.
            </p>
            <Button 
              size="lg" 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-cosmic-primary hover:bg-gray-100 font-semibold text-xl px-8 py-6 shadow-2xl"
            >
              Get Started Today
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

export default TeamPage;