import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Gift, Shield, Globe, Clock, Wallet, HeadphonesIcon, TrendingUp } from 'lucide-react';
import featureImage from '@/assets/feature-trader.jpg';

const features = [
  {
    icon: Zap,
    title: 'Crypto Trading',
    description: 'Buy, sell and exchange top cryptocurrencies securely, and at competitive rates - fast, easy, and stress-free.',
  },
  {
    icon: Gift,
    title: 'Gift Card Trading',
    description: 'We redeem wide varieties of cards with unbeatable rates.',
  },
];

const benefits = [
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Trade crypto with users in over 130+ countries — anytime, anywhere.',
  },
  {
    icon: Shield,
    title: 'Peer-to-Peer Freedom',
    description: 'No middlemen. Deal directly with real people, on your terms.',
  },
  {
    icon: Clock,
    title: 'Fast Settlements',
    description: 'Get your crypto or cash within minutes — especially with Nigerian bank payments and USDT trades.',
  },
  {
    icon: TrendingUp,
    title: 'Competitive Rates',
    description: 'Get better deals by choosing from a wide range of verified traders.',
  },
  {
    icon: Wallet,
    title: 'Low Fees, No Surprises',
    description: 'Keep more of your money. Our transparent system means no hidden charges.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Global 24/7 Support',
    description: 'Our support team is available to assist you quickly, especially during active trades.',
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Features header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={featureImage} 
              alt="African woman trading crypto" 
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium">
              <span className="text-2xl">🚀</span>
              <span>Our Features</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold">
              The Reliable, Affordable & Fastest Way to{' '}
              <span className="text-gradient">Trade Crypto</span> Across Borders
            </h2>

            <p className="text-muted-foreground text-lg">
              Trillion Trade empowers you to buy and sell crypto with ease — whether you're in Nigeria or abroad. 
              Our platform connects real people in real time, giving you access to fast, secure, and flexible peer-to-peer transactions.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4 p-4 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Benefits section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium">Your Benefits with Trillion Trade</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4">
            Take The Stress Out Of Managing{' '}
            <span className="text-gradient">Coins And Money</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-yellow-400 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
