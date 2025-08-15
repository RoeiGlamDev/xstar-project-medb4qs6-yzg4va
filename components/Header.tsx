import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  return (
    <header className="bg-black text-pink-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <motion.div
              src={logo}
              alt="luxery dark AirBNB Logo"
              className="h-10 mr-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <h1 className="text-3xl font-bold">luxery dark AirBNB</h1>
          </div>
          <nav className="hidden md:flex space-x-10">
            <motion.div
              href="#about"
              className="hover:text-pink-400 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              About Us
            </motion.a>
            <motion.div
              href="#services"
              className="hover:text-pink-400 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Services
            </motion.a>
            <motion.div
              href="#contact"
              className="hover:text-pink-400 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Contact
            </motion.a>
          </nav>
          <div className="md:hidden flex items-center">
            <button className="text-pink-500 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;