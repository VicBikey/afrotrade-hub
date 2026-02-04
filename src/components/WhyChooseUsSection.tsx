import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import whyChooseImage from '@/assets/why-choose-us.png';

const benefits = [
  'Send money cheaper and easier than old-school banks.',
  'Spend abroad without the hidden fees.',
  'Get your crypto or cash within minutes',
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium">
              <span className="text-2xl">💼</span>
              <span>Why Choose Trillion Trade?</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Moving And Living Abroad Just Got Simpler{' '}
              <span className="text-gradient">Get Paid Like A Local</span>
            </h2>

            <p className="text-muted-foreground text-lg">
              At Trillion Trade, we make peer-to-peer crypto trading fast, secure, and accessible — 
              especially for users in Nigeria and across the globe. With local payment support, verified traders, 
              and escrow-backed protection, we put control and confidence back in your hands. Whether you're buying or selling, you're in charge.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground/90">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <a href="https://demo.instantexchangers.com/exchange/USDT-TRC20/NGN" target="_blank" rel="noopener noreferrer">
                Get Started Now
              </a>
            </Button>
          </motion.div>

          {/* Image - Floating person effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Background glow effects */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-primary/30 rounded-full blur-3xl" />
            </div>
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-accent/30 rounded-full blur-xl" />
            
            {/* Person image - no container, floating effect */}
            <motion.img 
              src={whyChooseImage} 
              alt="Young African man using phone for crypto trading"
              className="relative z-10 w-full max-w-md object-contain drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4))'
              }}
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
              
            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-4 sm:bottom-8 left-0 sm:-left-4 glass-card p-4 sm:p-6 shadow-xl z-20"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">🌍</span>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-display font-bold text-gradient">130+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Countries Served</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
