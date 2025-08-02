import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { href: "/", label: "Home" },
        { href: "/team", label: "Meet Our Team" },
        { href: "/services", label: "Services" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/contact", label: "Contact Us" }
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Web Design" },
        { label: "Web Development" },
        { label: "SEO Optimization" },
        { label: "E-commerce Solutions" },
        { label: "Maintenance & Support" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog" },
        { label: "Case Studies" },
        { label: "Free Resources" },
        { label: "Website Audit" },
        { label: "Support Center" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
          >
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <motion.h3 
                className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                PixelNova Studio
              </motion.h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Crafting websites that generate leads and grow your business. 
                Your success is our passion, and we're committed to delivering 
                exceptional results that exceed your expectations.
              </p>
              
              <div className="space-y-3 mb-6">
                {/* Removed phone number and location */}
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">hello@pixelnovastudio.com</span>
                </motion.div>
              </div>
              
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, color: "hover:text-blue-400" },
                  { icon: Instagram, color: "hover:text-pink-400" },
                  { icon: Twitter, color: "hover:text-blue-300" },
                  { icon: Linkedin, color: "hover:text-blue-500" }
                ].map((social, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center ${social.color} transition-colors`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
            
            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div key={index} variants={itemVariants}>
                <h4 className="text-lg font-semibold mb-4 text-white">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {link.href ? (
                        <Link 
                          href={link.href} 
                          to={link.href}
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <span className="text-gray-300">{link.label}</span>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p 
                className="text-gray-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                ©2024 PixelNova Studio – All rights reserved. Made with 
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                </motion.span>
                by PixelNova Studio
              </motion.p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={scrollToTop}
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  <ArrowUp className="w-4 h-4 mr-2" />
                  Back to Top
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;