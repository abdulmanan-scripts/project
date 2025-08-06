import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, CheckCircle, Sparkles, Zap, TrendingUp, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import StrategyCallModal from './StrategyCallModal';
import ThreeScene from './ThreeScene';
import GSAPAnimations from './GSAPAnimations';
import WebGLBackground from './WebGLBackground';
import LottieAnimation from './LottieAnimation';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
    <WebGLBackground className="opacity-20" particleCount={500} color="#5D3FD3" />
    <section id="home" className="relative bg-gradient-to-br from-cosmic-background via-white to-cosmic-secondary/5 py-24 overflow-hidden min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64">
          <ThreeScene animation="float" color="#5D3FD3" size={1.5} />
        </div>
        <div className="absolute bottom-20 left-20 w-48 h-48">
          <ThreeScene animation="pulse" color="#FFC857" size={1} />
        </div>
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cosmic-secondary/20 to-cosmic-accent/20 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-cosmic-accent/20 to-cosmic-primary/20 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
          className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-cosmic-primary/20 to-cosmic-secondary/20 rounded-full blur-xl"
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <GSAPAnimations animation="slideInLeft" duration={1.2}>
            <div className="space-y-8">
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-cosmic-secondary" />
              </motion.div>
              <Badge variant="outline" className="border-cosmic-secondary text-cosmic-secondary font-semibold px-4 py-1">
                Premium Web Solutions
              </Badge>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-6xl lg:text-8xl font-bold text-cosmic-text mb-8 leading-tight"
            >
              <span className="block">Crafting</span>
              <motion.span 
                className="block bg-gradient-to-r from-cosmic-primary via-cosmic-secondary to-cosmic-accent bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                Websites That
              </motion.span>
              <motion.span 
                className="block text-cosmic-accent"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                Convert
              </motion.span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl"
            >
              Transform your online presence with websites that work 24/7 to grow your business. 
              We create stunning, high-converting digital experiences that turn visitors into customers.
            </motion.p>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 mb-10"
            >
              {[
                { icon: TrendingUp, value: "+20%", label: "ROI Increase", color: "text-green-500" },
                { icon: Users, value: "70+", label: "Happy Clients", color: "text-blue-500" },
                { icon: Zap, value: "<3s", label: "Load Time", color: "text-yellow-500" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 + index * 0.2 }}
                  className="text-center"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                  <div className="text-3xl font-bold text-cosmic-primary">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gradient-to-r from-cosmic-primary to-cosmic-secondary hover:from-cosmic-primary/90 hover:to-cosmic-secondary/90 text-white font-semibold text-xl px-8 py-6 shadow-2xl group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cosmic-accent/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">Book a Strategy Call</span>
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform relative z-10" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#portfolio" className="inline-block font-semibold text-xl border-2 px-8 py-6 rounded-lg hover:bg-cosmic-primary/5 hover:border-cosmic-primary transition-colors duration-200">
                  View Our Work
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-6"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.5 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>
                <span className="text-gray-700 font-semibold">5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Trusted by 200+ businesses</span>
              </div>
            </motion.div>
          </div>
          </GSAPAnimations>
          
          <GSAPAnimations animation="slideInRight" duration={1.2} delay={0.3}>
            <motion.div
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02, 
              rotateY: 10,
              rotateX: 5,
              z: 50
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="perspective-1000 transform-gpu"
            style={{ 
              perspective: '1000px',
              transformStyle: 'preserve-3d'
            }}
          >
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-xl relative overflow-hidden transform-gpu hover:shadow-3xl transition-all duration-500">
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cosmic-primary via-cosmic-secondary to-cosmic-accent opacity-20"
                animate={{
                  background: [
                    "linear-gradient(0deg, #0A0F2C, #5D3FD3, #FFC857)",
                    "linear-gradient(120deg, #0A0F2C, #5D3FD3, #FFC857)",
                    "linear-gradient(240deg, #0A0F2C, #5D3FD3, #FFC857)",
                    "linear-gradient(360deg, #0A0F2C, #5D3FD3, #FFC857)",
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="absolute inset-[1px] bg-white rounded-lg transform-gpu" />
              
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-bold text-cosmic-primary text-center relative z-10">
                  🚀 Get Your Free Strategy Session
                </CardTitle>
                <p className="text-gray-600 text-center text-lg relative z-10">
                  Discover how we can transform your online presence
                </p>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                {/* Benefits list */}
                <div className="space-y-3">
                  {[
                    " Free 30-minute consultation",
                    " Custom growth strategy",
                    " ROI-focused recommendations",
                    " Same-day response"
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.5 + index * 0.1 }}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-cosmic-secondary rounded-full" />
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full h-14 bg-gradient-to-r from-cosmic-primary to-cosmic-secondary hover:from-cosmic-primary/90 hover:to-cosmic-secondary/90 text-white font-semibold text-xl shadow-xl relative overflow-hidden group transform-gpu hover:shadow-2xl hover:translate-z-2"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cosmic-accent/30 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10">Schedule My Strategy Call</span>
                    <Calendar className="ml-2 h-5 w-5 relative z-10" />
                  </Button>
                </motion.div>
                
                <p className="text-sm text-gray-500 text-center">
                  No spam, unsubscribe at any time
                </p>
              </CardContent>
            </Card>
          </motion.div>
          </GSAPAnimations>
        </motion.div>
      </div>
    </section>
    
    <StrategyCallModal 
      open={isModalOpen} 
      onOpenChange={setIsModalOpen} 
    />
    </>
  );
};

export default Hero;