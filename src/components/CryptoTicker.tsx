import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CryptoPrice {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  image: string;
}

const COIN_IDS = [
  'bitcoin',
  'ethereum',
  'tether',
  'binancecoin',
  'solana',
  'ripple',
  'litecoin',
  'tron',
  'polkadot',
  'chainlink',
];

const fallbackData: CryptoPrice[] = [
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', current_price: 90520.11, price_change_percentage_24h: -0.22, image: '' },
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', current_price: 3105.89, price_change_percentage_24h: 0.04, image: '' },
  { id: 'tether', name: 'Tether', symbol: 'USDT', current_price: 0.998, price_change_percentage_24h: 0.01, image: '' },
  { id: 'binancecoin', name: 'BNB', symbol: 'BNB', current_price: 698.75, price_change_percentage_24h: -1.44, image: '' },
  { id: 'solana', name: 'Solana', symbol: 'SOL', current_price: 139.52, price_change_percentage_24h: 1.92, image: '' },
  { id: 'ripple', name: 'XRP', symbol: 'XRP', current_price: 2.05, price_change_percentage_24h: -2.18, image: '' },
  { id: 'litecoin', name: 'Litecoin', symbol: 'LTC', current_price: 76.00, price_change_percentage_24h: -5.97, image: '' },
  { id: 'tron', name: 'TRON', symbol: 'TRX', current_price: 0.297, price_change_percentage_24h: -0.47, image: '' },
  { id: 'polkadot', name: 'Polkadot', symbol: 'DOT', current_price: 4.04, price_change_percentage_24h: -2.97, image: '' },
  { id: 'chainlink', name: 'Chainlink', symbol: 'LINK', current_price: 13.09, price_change_percentage_24h: -0.82, image: '' },
];

const CryptoTicker = () => {
  const [prices, setPrices] = useState<CryptoPrice[]>(fallbackData);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${COIN_IDS.join(',')}&order=market_cap_desc&sparkline=false&price_change_percentage=24h`
        );
        
        if (!response.ok) throw new Error('Failed to fetch');
        
        const data: CryptoPrice[] = await response.json();
        setPrices(data);
        setIsLive(true);
      } catch (error) {
        console.log('Using fallback prices:', error);
        setIsLive(false);
      }
    };

    fetchPrices();
    
    // Refresh every 60 seconds (CoinGecko free tier limit)
    const interval = setInterval(fetchPrices, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const duplicatedData = [...prices, ...prices];

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    } else if (price >= 1) {
      return price.toFixed(2);
    } else {
      return price.toFixed(3);
    }
  };

  const formatChange = (change: number) => {
    const sign = change >= 0 ? '+' : '';
    return `${sign}${change.toFixed(2)}`;
  };

  return (
    <div className="bg-card border-y border-border overflow-hidden py-3 relative">
      {isLive && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs text-muted-foreground hidden sm:inline">Live</span>
        </div>
      )}
      <motion.div 
        className="flex gap-8 pl-16"
        animate={{ x: [0, -50 * prices.length] }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {duplicatedData.map((crypto, index) => (
          <div 
            key={`${crypto.id}-${index}`}
            className="flex items-center gap-3 whitespace-nowrap px-4"
          >
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
              {crypto.image ? (
                <img src={crypto.image} alt={crypto.name} className="w-6 h-6" />
              ) : (
                <span className="text-primary font-bold text-sm">
                  {crypto.symbol.charAt(0)}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{crypto.name}</span>
              <span className="text-xs text-muted-foreground">{crypto.symbol.toUpperCase()}</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm font-semibold">${formatPrice(crypto.current_price)}</span>
              <span className={`text-xs ${crypto.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {formatChange(crypto.price_change_percentage_24h)}%
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CryptoTicker;
