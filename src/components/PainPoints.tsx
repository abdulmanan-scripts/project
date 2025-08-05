import { motion } from 'framer-motion';
import { AlertTriangle, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PainPoints = () => {
  const painPoints = [
    {
      problem: "Unengaged visitors who leave without taking action",
      solution: "Strategic UX design that guides visitors to convert"
    },
    {
      problem: "Poor credibility that fails to build trust",
      solution: "Professional design that establishes authority"
    },
    {
      problem: "Ongoing technical issues and maintenance headaches",
      solution: "Reliable hosting and proactive maintenance"
    },
    {
      problem: "Poor conversion rates despite traffic",
      solution: "Conversion-optimized landing pages and funnels"
    },
    {
      problem: "Low search visibility and organic rankings",
      solution: "SEO-optimized structure and content strategy"
    },
    {
      problem: "Limited growth potential and scalability",
      solution: "Future-proof architecture that grows with you"
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Does This Sound Familiar?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            If you're experiencing any of these common website problems, you're not alone. 
            We've helped hundreds of businesses overcome these exact challenges.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                rotateY: 8,
                rotateX: 4,
                z: 25
              }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ 
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white transform-gpu">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1,
                        z: 15
                      }}
                      transition={{ duration: 0.6 }}
                      className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0 transform-gpu"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-gray-700 font-medium mb-3">{point.problem}</p>
                      <div className="border-t pt-3">
                        <div className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-green-700 font-medium">{point.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-xl text-gray-700 mb-6">
            Ready to turn these problems into opportunities?
          </p>
          <div className="flex justify-center items-center w-full">
            <Button
              size="lg"
              className="px-12 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg gap-2 shadow-lg border-0 hover:bg-gradient-to-r focus:outline-none"
              onClick={() => {
                const ctaSection = document.getElementById('cta');
                if (ctaSection) {
                  ctaSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Let's Fix This Together
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints;