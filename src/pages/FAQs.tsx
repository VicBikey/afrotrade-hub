import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: 'What is TRILLION TRADE?',
    answer: "Trillion Trade is a peer-to-peer (P2P) cryptocurrency exchange platform that allows users to buy and sell digital currencies directly with each other. Our platform serves as a secure marketplace where traders can Trade Directly, Set Their Own Rates, Use various payment methods including bank transfers, mobile money, and digital wallets and Secure Transactions.",
  },
  {
    question: 'How to start with TRILLION TRADE?',
    answer: 'Click on "Buy Crypto" or "Sell Crypto" from the main dashboard. Select the cryptocurrency token you want to trade (BTC, ETH, USDT, etc.). Browse available offers. Contact support if you need assistance with your first trade.',
  },
  {
    question: 'What Cryptocurrencies can I use to purchase?',
    answer: 'We support major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), USDT (TRC20, ERC20, BSC), USDC (SOL, ETH), Solana (SOL), BNB, TRON, and other popular digital assets.',
  },
  {
    question: 'What payment methods are supported?',
    answer: 'Trillion Trade supports a wide variety of payment methods to accommodate users globally, including: Bank transfers, Bank Services, Digital Wallets, Mobile Money, Cards, Gift Cards & Vouchers.',
  },
  {
    question: 'How long does a transaction take?',
    answer: 'Most transactions are completed within a few minutes. The exact time depends on the payment method used and how quickly both parties complete their parts of the trade. Nigerian bank payments and USDT trades are typically the fastest.',
  },
  {
    question: 'Is my money safe with Trillion Trade?',
    answer: 'Yes! We use an escrow system that protects both buyers and sellers. When a trade is initiated, the cryptocurrency is held in escrow until the payment is confirmed, ensuring a secure transaction for both parties.',
  },
  {
    question: 'What are the trading fees?',
    answer: 'We maintain transparent and competitive fees with no hidden charges. Our fee structure is designed to be fair and affordable for all traders. Contact our support team for specific fee information.',
  },
  {
    question: 'How do I contact support?',
    answer: 'You can reach our 24/7 support team via WhatsApp at +234 703 618 4469 or email us at contact@trilliontrade.online. We also have a live chat feature on our website.',
  },
  {
    question: 'Can I trade from any country?',
    answer: 'Yes! Trillion Trade operates in over 130+ countries worldwide. Whether you\'re in Nigeria, Ghana, Kenya, South Africa, or anywhere else, you can use our platform to trade cryptocurrencies.',
  },
  {
    question: 'Do I need to verify my identity?',
    answer: 'For security and compliance purposes, we may require identity verification for certain transactions. This helps us maintain a safe trading environment and protect our users from fraud.',
  },
];

const FAQs = () => {
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
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Let's Answer Some Of Your Questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <AccordionItem 
                    value={`item-${index}`}
                    className="glass-card px-6 border-none"
                  >
                    <AccordionTrigger className="text-left font-display font-semibold text-lg hover:text-primary transition-colors py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>

          {/* Still have questions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="glass-card max-w-2xl mx-auto p-8">
              <h3 className="text-2xl font-display font-bold mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Please chat with our friendly team.
              </p>
              <a
                href="https://wa.me/2347036184469"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <span>💬</span>
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer isDark={isDark} />
      <WhatsAppWidget />
    </div>
  );
};

export default FAQs;
