import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-trader.jpg';

const cryptoOptions = [
  { name: 'BTC', fullName: 'Bitcoin' },
  { name: 'ETH', fullName: 'Ethereum' },
  { name: 'USDT (TRC)', fullName: 'Tether TRC20' },
  { name: 'USDT (ETH)', fullName: 'Tether ERC20' },
  { name: 'USDT (BSC)', fullName: 'Tether BSC' },
  { name: 'USDC (SOL)', fullName: 'USD Coin SOL' },
  { name: 'USDC (ETH)', fullName: 'USD Coin ETH' },
  { name: 'SOL', fullName: 'Solana' },
  { name: 'BNB', fullName: 'Binance Coin' },
  { name: 'TRON', fullName: 'Tron' },
];

const HeroSection = () => {
  const [selectedCrypto, setSelectedCrypto] = useState(cryptoOptions[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    const message = `Hello, I want to ${activeTab} ${selectedCrypto.name}. Email: ${email}, Phone: ${phone}`;
    window.open(`https://wa.me/2347036184469?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        <div className="absolute inset-0 bg-hero-pattern" />
        
        {/* Animated shapes */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2"
            >
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Simple. Quick. Secure.</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Buy & Sell Crypto Globally —{' '}
              <span className="text-gradient">Instantly Trade</span>{' '}
              Across 130+ Countries
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
              Trillion Trade is the easiest P2P platform for trading cryptocurrencies. 
              Trade directly with real people, set your own rates, and use various payment methods.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
              {[
                { icon: Zap, text: 'Fast Settlements' },
                { icon: Shield, text: 'Escrow Protection' },
                { icon: Globe, text: '24/7 Support' },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-sm sm:text-base">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                <a href="https://demo.instantexchangers.com/exchange/USDT-TRC20/NGN" target="_blank" rel="noopener noreferrer">
                  Start Trading <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto" asChild>
                <a href="#how-it-works">
                  How It Works
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right content - Trade form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="glass-card p-4 sm:p-6 md:p-8 shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />

              <div className="relative space-y-6">
                {/* Amount input */}
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">You Send</label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="number"
                      placeholder="0"
                      className="flex-1 bg-secondary/50 border border-border rounded-xl px-4 py-3 text-xl sm:text-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <div className="relative">
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-2 bg-secondary/80 hover:bg-secondary border border-border rounded-xl px-4 py-3 transition-colors"
                      >
                        <span className="font-semibold">{selectedCrypto.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-xl shadow-xl overflow-hidden z-50"
                        >
                          {cryptoOptions.map((option) => (
                            <button
                              key={option.name}
                              onClick={() => {
                                setSelectedCrypto(option);
                                setIsDropdownOpen(false);
                              }}
                              className="w-full px-4 py-3 text-left hover:bg-secondary transition-colors flex items-center justify-between"
                            >
                              <span>{option.name}</span>
                              <span className="text-xs text-muted-foreground">{option.fullName}</span>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Exchange icon */}
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Recipient Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email Address"
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Recipient Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter Phone Number"
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  Delivery Time: <span className="font-semibold text-foreground">Few minutes</span>
                </div>

                {/* Buy/Sell tabs */}
                <div className="flex gap-4">
                  <Button
                    onClick={() => setActiveTab('buy')}
                    variant={activeTab === 'buy' ? 'hero' : 'secondary'}
                    size="lg"
                    className="flex-1"
                  >
                    Buy
                  </Button>
                  <Button
                    onClick={() => setActiveTab('sell')}
                    variant={activeTab === 'sell' ? 'hero' : 'secondary'}
                    size="lg"
                    className="flex-1"
                  >
                    Sell
                  </Button>
                </div>

                <Button onClick={handleSubmit} variant="gold" size="xl" className="w-full">
                  Proceed to {activeTab === 'buy' ? 'Buy' : 'Sell'}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
