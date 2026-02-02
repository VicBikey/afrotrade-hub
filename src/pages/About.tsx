import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { Shield, Users, Globe, TrendingUp, Award, Heart } from 'lucide-react';
import teamImage from '@/assets/team-success.jpg';
import featureImage from '@/assets/feature-trader.jpg';

const values = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'We prioritize the security of your funds and personal information above all else.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'We build for our community, listening to feedback and continuously improving.',
  },
  {
    icon: Globe,
    title: 'Global Access',
    description: 'Breaking barriers to provide financial services to everyone, everywhere.',
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'Constantly evolving our platform with the latest technology and features.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to providing the best trading experience for our users.',
  },
  {
    icon: Heart,
    title: 'Trust',
    description: 'Building lasting relationships through transparency and reliability.',
  },
];

const About = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      {/* Hero section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              About <span className="text-gradient">Trillion Trade</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              One Exchange Services Built on Trust, Raised by Demand and Structured for the Long Term
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={teamImage} 
                alt="Our Team"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <span className="text-primary text-sm font-medium">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Building the Future of <span className="text-gradient">Crypto Trading</span> in Africa
              </h2>
              <p className="text-muted-foreground text-lg">
                Trillion Trade is a peer-to-peer (P2P) cryptocurrency exchange platform that 
                allows users to buy and sell digital currencies directly with each other. Our 
                platform serves as a secure marketplace where traders can trade directly, set 
                their own rates, and use various payment methods including bank transfers, 
                mobile money, and digital wallets.
              </p>
              <p className="text-muted-foreground">
                Founded with the vision of making cryptocurrency accessible to everyone in Africa 
                and beyond, we've grown to serve traders across 130+ countries with fast, secure, 
                and transparent transactions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-yellow-400 flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To democratize cryptocurrency trading by providing a secure, user-friendly 
                platform that empowers individuals to take control of their financial future, 
                regardless of their location or background.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-yellow-400 flex items-center justify-center mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To become Africa's leading cryptocurrency exchange platform, fostering financial 
                inclusion and innovation while building a trusted community of traders worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-4">
              What Drives <span className="text-gradient">Our Success</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-yellow-400 transition-all duration-300">
                  <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="text-primary text-sm font-medium">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                What We <span className="text-gradient">Offer</span>
              </h2>
              <ul className="space-y-4">
                {[
                  'Crypto Trading (Buy & Sell)',
                  'Gift Card Trading',
                  'Bill Payment Services',
                  'Data Analysis',
                  'Cyber Security Consulting',
                  'Full Stack Development',
                  'Graphics Design',
                  'Digital Forensics',
                ].map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src={featureImage} 
                alt="Our Services"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer isDark={isDark} />
      <WhatsAppWidget />
    </div>
  );
};

export default About;
