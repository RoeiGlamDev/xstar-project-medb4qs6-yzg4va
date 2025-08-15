import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  title: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Basic Package',
    price: '$99/month',
    features: [
      'Access to premium listings',
      'Enhanced customer support',
      'High-speed internet',
      'Smart home integration',
    ],
  },
  {
    title: 'Premium Package',
    price: '$199/month',
    features: [
      'All Basic Package features',
      'Advanced analytics dashboard',
      'Priority listing visibility',
      'Automated guest communication',
    ],
  },
  {
    title: 'Elite Package',
    price: '$299/month',
    features: [
      'All Premium Package features',
      'Customizable branding solutions',
      '24/7 tech support',
      'Exclusive luxury partnerships',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-20 px-5">
      <motion.div
        className="text-4xl font-bold mb-10 text-pink-500"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Pricing for luxery dark AirBNB
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-around">
        {pricingTiers.map((tier) => (
          <motion.div
            key={tier.title}
            className="bg-gray-800 rounded-lg shadow-lg p-5 m-3 flex-1 transition-transform transform hover:scale-105"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-pink-500 mb-2">{tier.title}</h3>
            <p className="text-xl mb-4">{tier.price}</p>
            <ul className="mb-5">
              {tier.features.map((feature, index) => (
                <li key={index} className="mb-2">
                  - {feature}
                </li>
              ))}
            </ul>
            <button className="bg-pink-500 text-black py-2 px-4 rounded hover:bg-pink-600 transition-colors">
              Choose Plan
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;