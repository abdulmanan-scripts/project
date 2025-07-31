import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Clock, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ValueProps = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Genuine Website Enquiries",
      description: "Convert more visitors into qualified leads with strategic design",
      metric: "150% increase",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Generate More Leads",
      description: "Consistent flow of potential customers through optimized funnels",
      metric: "3x more leads",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Enhance Local Reputation",
      description: "Build trust and credibility in your market with professional design",
      metric: "95% satisfaction",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Reduce Website-Related Stress",
      description: "Focus on your business while we handle all technical aspects",
      metric: "24/7 support",
      color: "from-orange-500 to-red-500"
    }
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose PixelNova Studio?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just build websites – we create digital experiences that drive results and grow your business.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className={`bg-gradient-to-r ${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className={`text-sm font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                      {benefit.metric}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-green-500" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProps;