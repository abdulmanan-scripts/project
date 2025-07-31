import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Code, Search, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Web Design",
      description: "Beautiful, user-friendly designs that convert visitors into customers",
      features: ["Custom UI/UX Design", "Mobile-First Approach", "Brand Integration", "Conversion Optimization"],
      price: "Starting at $500",
      popular: false
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Robust, scalable websites built with the latest technologies",
      features: ["Custom Development", "CMS Integration", "E-commerce Solutions", "Performance Optimization"],
      price: "Starting at $1,500",
      popular: true
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Get found online with comprehensive search engine optimization",
      features: ["Technical SEO", "Content Strategy", "Local SEO", "Analytics & Reporting"],
      price: "Starting at $300",
      popular: false
    }
  ];

  const process = [
    { 
      step: "01", 
      title: "Discovery", 
      description: "Understanding your business goals and requirements through detailed consultation",
      duration: "1-2 weeks"
    },
    { 
      step: "02", 
      title: "Strategy", 
      description: "Developing a comprehensive plan for success with wireframes and user journey mapping",
      duration: "1 week"
    },
    { 
      step: "03", 
      title: "Design", 
      description: "Creating stunning visual designs that reflect your brand and engage users",
      duration: "2-3 weeks"
    },
    { 
      step: "04", 
      title: "Development", 
      description: "Building your website with cutting-edge technology and best practices",
      duration: "3-4 weeks"
    },
    { 
      step: "05", 
      title: "Testing", 
      description: "Rigorous testing across devices and browsers to ensure perfect functionality",
      duration: "1 week"
    },
    { 
      step: "06", 
      title: "Launch", 
      description: "Deploying your website and providing comprehensive training and support",
      duration: "1 week"
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
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive web solutions designed to grow your business and establish your online presence.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Card className={`h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 relative ${
                service.popular ? 'ring-2 ring-blue-500 bg-gradient-to-br from-blue-50 to-white' : 'bg-white'
              }`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="pb-4">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg ${
                      service.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                        : 'bg-gradient-to-r from-gray-600 to-gray-700'
                    }`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-2xl text-center">{service.title}</CardTitle>
                  <p className="text-gray-600 text-center">{service.description}</p>
                  <div className="text-center">
                    <span className={`text-2xl font-bold ${
                      service.popular ? 'text-blue-600' : 'text-gray-900'
                    }`}>
                      {service.price}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className="flex items-center text-gray-700"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Proven Process
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic 6-step approach that ensures your project is delivered on time, on budget, and exceeds expectations.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {process.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-center"
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  <motion.div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                  >
                    {item.step}
                  </motion.div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 mb-3 leading-relaxed">{item.description}</p>
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    {item.duration}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;