import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import ThreeScene from './ThreeScene';
import GSAPAnimations from './GSAPAnimations';

const Team = () => {
  const teamMembers = [
    {
      name: "Abdul Manan",
      role: "Founder | CEO | Tech Lead | Digital Strategist",
      image: "https://media.licdn.com/dms/image/v2/D4D35AQFnTvWWNBqL5g/profile-framedphoto-shrink_400_400/B4DZg_DczFGkAc-/0/1753404526058?e=1754294400&v=beta&t=kQ1GOgoT4QHaeTmxno41nUDrLxL5X36Ppk9JqZC13dE",
      bio: "Founder and CEO of a results-driven web development agency, leading with a passion for innovation, design, and scalable digital solutions. With a background in full-stack development and business strategy, I help brands grow through impactful online experiences.",
      expertise: ["High-Performance Team Leadership", "Strategic Sales & Revenue Growth", "B2B Business Development","Web Development & Architecture"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "abdulmanan72141251@gmial.com"
      }
    },
    {
      name: "Abdullah",
      role: "Co-founder | Data Engineer | Machine Learning Engineer | Building Ethical AI Solutions",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQEXm8PZem5z9g/profile-displayphoto-shrink_400_400/B4DZPVnTnaGUAg-/0/1734455671886?e=1756339200&v=beta&t=tA0DmZZsSHtYiOGPIERqDmlWdoqdg5qYiaH8SA9qGMM",
      bio: "Driven data engineer and machine learning enthusiast passionate about building ethical, impactful tech solutions. Skilled in data modeling, cloud systems, and AI development, with a focus on responsible innovation.",
      expertise: ["Data Engineering & Dimensional Modeling", "Cloud Infrastructure (AWS, GCP, Azure)", "Machine Learning & Predictive Modeling","Natural Language Processing (NLP)"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "huzaifa@pixelnovastudio.com"
      }
    },
    {
      name: "Asad Chaudhary ",
      role: "Digital Marketing Strategist | Driving E-commerce Growth",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQGeQsxCnHMeTg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718305242822?e=1756339200&v=beta&t=DIWmSaARPCFPJ25e7bFNkxTHwC4IzFfZNM93LFY8fJ8",
      bio: "Specialist in Digital Marketing, SEO, E-commerce management, and Google Maps optimization. Focused on driving traffic, boosting visibility, and delivering long-term growth for businesses online.",
      expertise: ["SEO Optimization", "E-commerce Store Management", "Google Maps & Local SEO","Digital Marketing Strategy"],
      social: {
        linkedin: "#",
        github: "#",
        email: "asad@pixelnovastudio.com"
      }
    },

    
    {
      name: "Zaman Khan",
      role: "Frontend Developer or Junior Developer",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQHFLGIczJLCXg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731136562714?e=1756339200&v=beta&t=6gumkRJ3c5AJJIsk9XApShSQAScZeLfS8tVu8e_Gho8",
      bio: "Motivated frontend developer with hands-on experience in modern web technologies and a strong academic foundation in computer science. Passionate about building responsive, performance-optimized websites and continuously learning through personal projects and real-world development work.. Expert in React, Node.js, and cloud architecture.",
      expertise: ["HTML, CSS & JavaScript", "Responsive Web Design","Database Handling ", "Version Control (Git/GitHub)"],
      social: {
        linkedin: "#",
        github: "#",
        email: "bilal@pixelnovastudio.com"
      }
    },


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
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GSAPAnimations animation="fadeInUp" duration={1}>
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="absolute top-0 right-1/4 w-32 h-32 opacity-25">
            <ThreeScene animation="pulse" color="#8B5CF6" size={1} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The talented professionals behind every successful project. We're passionate about delivering exceptional results.
          </p>
        </motion.div>
        </GSAPAnimations>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <GSAPAnimations key={index} animation="rotateIn" duration={1} delay={index * 0.15}>
              <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 12,
                rotateX: 8,
                z: 35,
                transition: { type: "spring", stiffness: 300 }
              }}
              style={{ 
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 group transform-gpu">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        rotateY: 15,
                        z: 20
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <Avatar className="w-32 h-32 mx-auto border-4 border-white shadow-lg transform-gpu hover:shadow-xl">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    </motion.div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="space-y-2">
                    {member.expertise.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1 mb-1"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            </GSAPAnimations>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;