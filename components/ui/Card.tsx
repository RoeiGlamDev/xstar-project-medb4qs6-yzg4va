import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-black bg-opacity-70 backdrop-blur-md transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-6">
        <h2 className="text-pink-500 text-2xl font-bold mb-2">{title}</h2>
        <p className="text-white text-base">{description}</p>
        <a
          href="#"
          className="mt-4 inline-block text-pink-500 hover:underline"
        >
          Explore more at luxery dark AirBNB
        </a>
      </div>
    </motion.div>
  );
};

export default Card;