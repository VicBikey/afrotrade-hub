import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

// Custom TikTok icon since lucide-react doesn't have one
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);
import logoLight from '@/assets/logo-light.svg';
import logoDark from '@/assets/logo-dark.svg';

interface FooterProps {
  isDark?: boolean;
}

const Footer = ({ isDark = false }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border relative">
      {/* Back to top button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={isDark ? logoDark : logoLight} 
                alt="Trillion Trade Logo" 
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight">TRILLION</span>
                <span className="text-xs text-muted-foreground tracking-widest">TECH & TRADE</span>
              </div>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Trillion Trade is the easiest P2P platform for trading cryptocurrencies.
              Trade directly with real people, set your own rates, and use various payment methods.
            </p>
            <div className="flex gap-4">
              {[
                { name: 'facebook', icon: Facebook, href: 'https://www.facebook.com/share/17Pk6BHfCu/' },
                { name: 'twitter', icon: Twitter, href: 'https://x.com/trilliontecht' },
                { name: 'instagram', icon: Instagram, href: 'https://www.instagram.com/trilliontechtrade' },
                { name: 'tiktok', icon: TikTokIcon, href: 'https://www.tiktok.com/@trillion.tech.tra' },
                { name: 'linkedin', icon: Linkedin, href: 'https://www.linkedin.com/company/trillion-tech-trade/' },
              ].map((social) => (
                <a 
                  key={social.name} 
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'FAQs', href: '/faqs' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+2347036184469" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+234 703 618 4469</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@trilliontrade.online" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>contact@trilliontrade.online</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Enugu, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Trillion Tech & Trade. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
