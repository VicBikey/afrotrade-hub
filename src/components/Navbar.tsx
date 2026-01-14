import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-card border-b border-border">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+2347036184469" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +234 703 618 4469
            </a>
            <a href="mailto:contact@trilliontrade.online" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              contact@trilliontrade.online
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">Simple. Quick. Secure.</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-xl shadow-lg border-b border-border' 
            : 'bg-background/80 backdrop-blur-md'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-primary-foreground font-display font-bold text-xl">T</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full animate-pulse" />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight">TRILLION</span>
                <span className="text-xs text-muted-foreground tracking-widest">TECH & TRADE</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative font-medium transition-colors hover:text-primary ${
                    location.pathname === link.href ? 'text-primary' : 'text-foreground/80'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>
              <Button variant="hero" size="lg" asChild>
                <a href="https://demo.instantexchangers.com/exchange/USDT-TRC20/NGN" target="_blank" rel="noopener noreferrer">
                  Trade Crypto
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-secondary"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-t border-border"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`py-3 px-4 rounded-xl font-medium transition-colors ${
                      location.pathname === link.href 
                        ? 'bg-primary/10 text-primary' 
                        : 'hover:bg-secondary'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button variant="hero" size="lg" className="mt-4" asChild>
                  <a href="https://demo.instantexchangers.com/exchange/USDT-TRC20/NGN" target="_blank" rel="noopener noreferrer">
                    Trade Crypto
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
