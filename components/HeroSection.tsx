import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <motion.div
        className="max-w-4xl text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient">
          Welcome to <span className="text-pink-500">luxery dark AirBNB</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Experience the pinnacle of technology-driven luxury stays with <strong>luxery dark AirBNB</strong>. Our platform utilizes cutting-edge solutions to elevate your travel experience.
        </p>
        <div className="flex space-x-4">
          <motion.div
            href="#explore"
            className="bg-pink-500 text-black py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Listings
          </motion.a>
          <motion.div
            href="#contact"
            className="bg-black text-pink-500 border border-pink-500 py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </div>
      </motion.div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm text-gray-400">
        Trusted by thousands for a seamless luxury experience.
      </div>
    </section>
  );
};

export default HeroSection;