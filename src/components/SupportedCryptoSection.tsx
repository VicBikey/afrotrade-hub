import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const cryptos = [
  { name: 'Bitcoin', symbol: 'BTC', icon: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png' },
  { name: 'Ethereum', symbol: 'ETH', icon: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png' },
  { name: 'Binance', symbol: 'BNB', icon: 'https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png' },
  { name: 'Solana', symbol: 'SOL', icon: 'https://assets.coingecko.com/coins/images/4128/small/solana.png' },
  { name: 'USDC', symbol: 'USDC', icon: 'https://assets.coingecko.com/coins/images/6319/small/usdc.png' },
  { name: 'USDT', symbol: 'USDT', icon: 'https://assets.coingecko.com/coins/images/325/small/Tether.png' },
  { name: 'Tron', symbol: 'TRX', icon: 'https://assets.coingecko.com/coins/images/1094/small/tron-logo.png' },
  { name: 'Polygon', symbol: 'MATIC', icon: 'https://assets.coingecko.com/coins/images/4713/small/polygon.png' },
];

const SupportedCryptoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-card/30 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <motion.div
        animate={{ 
          rotate: 360,
        }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full border border-primary/10"
      />
      <motion.div
        animate={{ 
          rotate: -360,
        }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full border border-primary/5"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium">We Are Covering</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4">
            Send Payments Locally — <span className="text-gradient">No Borders, No Hassle</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {cryptos.map((crypto, index) => (
            <motion.div
              key={crypto.symbol}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 text-center group cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-card/50 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={crypto.icon} 
                  alt={crypto.name} 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="font-display font-semibold text-lg">{crypto.name}</h3>
              <p className="text-sm text-muted-foreground">{crypto.symbol}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-muted-foreground mt-8"
        >
          And so many more..........
        </motion.p>
      </div>
    </section>
  );
};

export default SupportedCryptoSection;
