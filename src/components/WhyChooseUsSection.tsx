import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import teamImage from '@/assets/team-success.jpg';

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

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img 
                src={teamImage} 
                alt="African business team celebrating success"
                className="rounded-3xl shadow-2xl"
              />
              
              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-8 -left-8 glass-card p-6 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-yellow-400 flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <p className="text-3xl font-display font-bold text-gradient">130+</p>
                    <p className="text-sm text-muted-foreground">Countries Served</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
