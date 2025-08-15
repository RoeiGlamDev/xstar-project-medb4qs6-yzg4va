import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: 'Smart Home Technology',
    description: 'Experience the future of living with our integrated smart home solutions, providing comfort and convenience at your fingertips.',
  },
  {
    title: 'Luxury Accommodations',
    description: 'Indulge in our high-end properties that redefine luxury with modern designs and premium amenities tailored for your comfort.',
  },
  {
    title: 'Seamless Booking Experience',
    description: 'Our user-friendly platform ensures a smooth booking process, allowing you to secure your dream stay in just a few clicks.',
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="bg-black text-pink-500 min-h-screen flex flex-col">
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn">Welcome to luxery dark AirBNB</h1>
        <p className="text-xl animate__animated animate__fadeIn animate__delay-1s">
          Discover the pinnacle of high-end living with cutting-edge technology and elegant designs.
        </p>
      </header>

      <section className="flex flex-col items-center py-20">
        <motion.div
          className="text-4xl font-semibold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-center py-5">
        <p className="text-lg">
          © {new Date().getFullYear()} luxery dark AirBNB. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;