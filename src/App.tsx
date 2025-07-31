import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import PainPoints from './components/PainPoints';
import Features from './components/Features';
import Services from './components/Services';
import Team from './components/Team';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ValueProps />
      <Portfolio />
      
      {/* Mid-page CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center py-16 bg-gradient-to-r from-blue-50 to-purple-50"
      >
        <div className="flex justify-center items-center w-full">
          <Button
            size="lg"
            className="px-12 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-xl border-0 hover:bg-gradient-to-r focus:outline-none"
            onClick={() => {
              const ctaSection = document.getElementById('cta');
              if (ctaSection) {
                ctaSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Let's Fix This Together
          </Button>
        </div>
      </motion.div>
      
      <Testimonials />
      <PainPoints />
      <Features />
      <Services />
      <Team />
      <FAQ />
      <FinalCTA />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;