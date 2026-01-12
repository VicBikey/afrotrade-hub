import { motion } from 'framer-motion';

const cryptoData = [
  { name: 'Bitcoin', symbol: 'BTC', price: '90,520.11', change: '-0.22', icon: '₿' },
  { name: 'Ethereum', symbol: 'ETH', price: '3,105.89', change: '+0.04', icon: 'Ξ' },
  { name: 'Tether', symbol: 'USDT', price: '0.998', change: '+0.01', icon: '₮' },
  { name: 'BNB', symbol: 'BNB', price: '698.75', change: '-1.44', icon: 'B' },
  { name: 'Solana', symbol: 'SOL', price: '139.52', change: '+1.92', icon: 'S' },
  { name: 'XRP', symbol: 'XRP', price: '2.05', change: '-2.18', icon: 'X' },
  { name: 'Litecoin', symbol: 'LTC', price: '76.00', change: '-5.97', icon: 'Ł' },
  { name: 'TRON', symbol: 'TRX', price: '0.297', change: '-0.47', icon: 'T' },
  { name: 'Polkadot', symbol: 'DOT', price: '4.04', change: '-2.97', icon: '●' },
  { name: 'Chainlink', symbol: 'LINK', price: '13.09', change: '-0.82', icon: '⬡' },
];

const CryptoTicker = () => {
  const duplicatedData = [...cryptoData, ...cryptoData];

  return (
    <div className="bg-card border-y border-border overflow-hidden py-3">
      <motion.div 
        className="flex gap-8"
        animate={{ x: [0, -50 * cryptoData.length] }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {duplicatedData.map((crypto, index) => (
          <div 
            key={`${crypto.symbol}-${index}`}
            className="flex items-center gap-3 whitespace-nowrap px-4"
          >
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
              {crypto.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{crypto.name}</span>
              <span className="text-xs text-muted-foreground">{crypto.symbol}</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm font-semibold">${crypto.price}</span>
              <span className={`text-xs ${crypto.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {crypto.change}%
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CryptoTicker;
