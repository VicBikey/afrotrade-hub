import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Users, ArrowLeftRight, MessageSquare } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Explore the Platform',
    description: 'Browse available buy and sell offers for your preferred cryptocurrency.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    number: '02',
    icon: Users,
    title: 'Choose Your Trade',
    description: 'Select a trusted buyer or seller based on rates, payment method, and reviews.',
    color: 'from-orange-500 to-red-500',
  },
  {
    number: '03',
    icon: ArrowLeftRight,
    title: 'Initiate the Transaction',
    description: 'Follow the simple trade steps — our escrow system protects both parties.',
    color: 'from-primary to-yellow-400',
  },
  {
    number: '04',
    icon: MessageSquare,
    title: 'Contact Admin to Finalise',
    description: "Ready to join? Reach out to our admin team to finalise the trade.",
    color: 'from-yellow-400 to-yellow-600',
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 bg-card/50 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium">Getting Started</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4">
            Get Set Up And Start Sending And Receiving{' '}
            <span className="text-gradient">Cryptocurrency</span> In Minutes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}

              <div className="relative bg-background rounded-3xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl group-hover:-translate-y-2">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-yellow-400 flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="font-display font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
