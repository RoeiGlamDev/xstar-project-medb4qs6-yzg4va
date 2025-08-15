import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  children: React.ReactNode;
}

const buttonVariants = {
  primary: 'bg-pink-600 text-white hover:bg-pink-700',
  secondary: 'bg-black text-pink-600 hover:bg-gray-800',
};

const buttonSizes = {
  small: 'py-2 px-4 text-sm',
  medium: 'py-3 px-6 text-base',
  large: 'py-4 px-8 text-lg',
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'medium', onClick, children }) => {
  return (
    <motion.div
      className={`rounded transition-all duration-300 ${buttonVariants[variant]`} ${buttonSizes[size]}}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={Button - ${children}}
    >
      {children}
    </motion.button>
  );
};

export default Button;