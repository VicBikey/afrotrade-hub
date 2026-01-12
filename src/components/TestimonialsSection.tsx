import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Chinedu A.',
    location: 'Lagos, Nigeria',
    avatar: 'CA',
    text: "Trillion Trade is the easiest P2P platform I've ever used. I was able to buy USDT using my Nigerian bank account in minutes. The whole process felt safe and smooth.",
    rating: 5,
  },
  {
    name: 'Fatima S.',
    location: 'Abuja, Nigeria',
    avatar: 'FS',
    text: "Fast, transparent, and stress-free. I've traded on several platforms, but Trillion Trade stands out with its escrow protection and active support. Highly recommend!",
    rating: 5,
  },
  {
    name: 'Kwame B.',
    location: 'Accra, Ghana',
    avatar: 'KB',
    text: "I was able to sell crypto to someone in the US from here in Ghana without any drama. Great rates, local payment options, and real-time support made it super easy.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium">Our Review</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4">
            More Than <span className="text-gradient">4,405,28</span> Happy Customers{' '}
            <br className="hidden md:block" />
            Trust Our Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative glass-card p-8 hover:shadow-2xl transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/90 mb-8 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-yellow-400 flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            But don't just take our word for it - check out what our customers have to say about their experience with us:{' '}
            <span className="text-foreground font-semibold">Excellent</span>{' '}
            Based on <span className="text-primary font-semibold">25,454</span> reviews
          </p>
          <div className="flex justify-center gap-1 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
