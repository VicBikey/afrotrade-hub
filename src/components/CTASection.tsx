import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20" />
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <span className="text-primary text-sm font-medium">Connect Us</span>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Pay Businesses or Support Family —{' '}
            <span className="text-gradient">Instantly, Anywhere</span> in the World with Trillion Trade.
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
              <a href="https://demo.instantexchangers.com/exchange/USDT-TRC20/NGN" target="_blank" rel="noopener noreferrer">
                Start Trading <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
