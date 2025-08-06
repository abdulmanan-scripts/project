// ...existing code...
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ThreeScene from './ThreeScene';
import GSAPAnimations from './GSAPAnimations';

const Portfolio = () => {
  const projects = [
    {
      title: "Elite Roofing Solutions",
      category: "Construction",
      image: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete website redesign that increased leads by 150% in 3 months",
      results: ["150% more leads", "3x faster loading", "Mobile-first design"],
      client: "Mike Johnson, CEO",
      rating: 5
    },
    {
      title: "Helpline Orthopaedic Center",
      category: "Healthcare",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Modern medical website with appointment booking system and patient portal",
      results: ["200% patient inquiries", "Streamlined bookings", "HIPAA compliant"],
      client: "Dr. Sarah Williams",
      rating: 5
    },
    {
      title: "Bella Vista Restaurant",
      category: "Food & Beverage",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "E-commerce platform with online ordering and delivery integration",
      results: ["300% online orders", "Seamless UX", "Multi-location support"],
      client: "Antonio Rodriguez, Owner",
      rating: 5
    },
    {
      title: "Premier Financial Advisors",
      category: "Finance",
      image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Professional website with secure client portal and financial calculators",
      results: ["250% client acquisition", "Enhanced security", "Automated workflows"],
      client: "Jennifer Chen, Managing Partner",
      rating: 5
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
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GSAPAnimations animation="fadeInUp" duration={1}>
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="absolute top-0 left-1/3 w-36 h-36 opacity-20">
            <ThreeScene animation="float" color="#10B981" size={1.1} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Work • Your Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses like yours achieve remarkable results with custom web solutions.
          </p>
        </motion.div>
        </GSAPAnimations>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {projects.map((project, index) => (
            <GSAPAnimations key={index} animation="slideInUp" duration={1} delay={index * 0.2}>
              <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                rotateY: 8,
                rotateX: 5,
                scale: 1.02,
                z: 40
              }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ 
                perspective: '1200px',
                transformStyle: 'preserve-3d'
              }}
            >
              <Card className="overflow-hidden border-0 shadow-xl hover:shadow-3xl transition-all duration-500 bg-white transform-gpu">
                <div className="relative overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-500 transform-gpu"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 transform-gpu"
                    whileHover={{ opacity: 1 }}
                  >
                    {/* Removed View Project button */}
                  </motion.div>
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-900">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">by {project.client}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="space-y-2">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            </GSAPAnimations>
          ))}
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;