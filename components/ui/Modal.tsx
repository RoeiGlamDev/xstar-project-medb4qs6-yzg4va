import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md z-50">
      <motion.div
        className="bg-black rounded-lg shadow-lg p-6 max-w-lg w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-pink-500 text-2xl font-bold mb-4">{title}</h2>
        <p className="text-white mb-6">
          {content}
        </p>
        <button
          className="bg-pink-500 text-black font-semibold py-2 px-4 rounded hover:bg-pink-400 transition duration-200"
          onClick={onClose}
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;