import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Abdul Hammed",
      title: "CEO, Helpline Orthopedic Center",
      rating: 5,
      text: "Design Syncs transformed our online presence completely. Our patient inquiries increased by 200% within the first month. Their attention to detail and understanding of the healthcare industry is exceptional. The new appointment booking system has streamlined our operations significantly.",
      text: "PixelNova Studio transformed our online presence completely. Our patient inquiries increased by 200% within the first month. Their attention to detail and understanding of the healthcare industry is exceptional. The new appointment booking system has streamlined our operations significantly.",
      avatar: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=150",
      company: "HOC",
      result: "200% increase in patient inquiries"
    },
    {
      name: "Noah James",
      title: "Founder, Premier Financial Advisors",
      rating: 5,
      text: "Working with Design Syncs was a game-changer for our financial services company. They delivered a secure, professional website that builds trust with our clients and has significantly improved our conversion rates. The client portal they developed is exactly what we needed.",
      text: "Working with PixelNova Studio was a game-changer for our financial services company. They delivered a secure, professional website that builds trust with our clients and has significantly improved our conversion rates. The client portal they developed is exactly what we needed.",
      avatar: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=150",
      company: "PFA",
      result: "250% more client acquisitions"
    },
    {
      name: "Sarah Mitchell",
      title: "Owner, Elite Roofing Solutions",
      rating: 5,
      text: "The team at Design Syncs understood our business needs perfectly. Our new website generates qualified leads daily, and the design perfectly represents our brand's professionalism and reliability. We've seen a 150% increase in quality leads since launch.",
      text: "The team at PixelNova Studio understood our business needs perfectly. Our new website generates qualified leads daily, and the design perfectly represents our brand's professionalism and reliability. We've seen a 150% increase in quality leads since launch.",
      avatar: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=150",
      company: "ERS",
      result: "150% increase in quality leads"
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
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it – hear from business owners who've experienced real results.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6 relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    className="absolute -top-3 -left-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-3"
                  >
                    <Quote className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <div className="flex mb-4 mt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mb-4 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <p className="text-sm font-semibold text-green-700">
                      {testimonial.result}
                    </p>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.title}</p>
                      <p className="text-blue-600 text-xs font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;