import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Experience the Future of Luxury",
  description = "Welcome to luxery dark AirBNB, where technology meets elegance. Discover smart living spaces designed for the discerning traveler.",
  buttonText = "Book Your Stay",
  onButtonClick,
}) => {
  return (
    <section className="bg-black text-pink-500 p-10 flex flex-col items-center justify-center">
      <motion.div 
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div 
        className="text-lg mb-6 text-center max-w-lg"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </motion.p>
      <motion.div 
        className="bg-pink-600 hover:bg-pink-700 text-black font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out"
        onClick={onButtonClick}
        initial={{ scale: 1 }} 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
      </motion.button>
    </section>
  );
};

export default CTASection;