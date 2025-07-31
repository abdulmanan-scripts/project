import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive web services including custom web design, web development, SEO optimization, e-commerce solutions, and ongoing maintenance and support. Our team specializes in creating high-converting websites that drive business growth."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing varies based on project scope and requirements. We offer competitive packages starting from $5,000 for basic websites up to $50,000+ for complex e-commerce and custom applications. Contact us for a personalized quote tailored to your specific needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity. A standard business website takes 4-6 weeks, while more complex projects like e-commerce sites or custom applications can take 8-12 weeks. We provide detailed timelines during our discovery phase."
    },
    {
      question: "Do you create custom designs or use templates?",
      answer: "We create 100% custom designs tailored to your brand and business needs. We never use templates, ensuring your website is unique and stands out from competitors. Every design is crafted specifically for your target audience and business goals."
    },
    {
      question: "Are your websites mobile-friendly?",
      answer: "Absolutely! All our websites are built with a mobile-first approach, ensuring they look and function perfectly on all devices - smartphones, tablets, and desktops. We test extensively across different screen sizes and browsers."
    },
    {
      question: "Do you offer maintenance plans?",
      answer: "Yes, we offer comprehensive maintenance plans that include regular updates, security monitoring, backups, performance optimization, and technical support to keep your website running smoothly and securely."
    },
    {
      question: "Can I update my website content myself?",
      answer: "Yes! We build websites with user-friendly content management systems that allow you to easily update text, images, and other content without technical knowledge. We also provide training and documentation."
    },
    {
      question: "How do you track website performance?",
      answer: "We provide detailed analytics and reporting through Google Analytics and other advanced tools, giving you insights into traffic, conversions, user behavior, and ROI. We also offer monthly performance reports and recommendations."
    },
    {
      question: "What makes Design Syncs different from other agencies?",
      question: "What makes PixelNova Studio different from other agencies?",
      answer: "Our focus on results sets us apart. We don't just build beautiful websites - we create lead-generating machines. Our team combines strategic thinking, cutting-edge design, and technical expertise to deliver websites that actually grow your business."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes, we provide comprehensive post-launch support including technical assistance, content updates, performance monitoring, and strategic guidance. We're your long-term partner in digital success."
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="w-6 h-6 text-blue-600" />
            <span className="text-blue-600 font-semibold">Got Questions?</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to the most common questions about our services and process.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="bg-white rounded-lg shadow-sm border-0 px-6 hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;