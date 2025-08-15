import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  title: string;
  price: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Standard Package',
    price: '$199/night',
    features: [
      'High-speed Wi-Fi',
      'Smart TV with streaming services',
      '24/7 customer support',
      'Luxury bedding and amenities'
    ],
  },
  {
    title: 'Premium Package',
    price: '$299/night',
    features: [
      'All Standard features',
      'Private pool access',
      'Personal concierge service',
      'Gourmet breakfast included'
    ],
  },
  {
    title: 'Elite Package',
    price: '$499/night',
    features: [
      'All Premium features',
      'Exclusive access to luxury car rentals',
      'Spa and wellness package',
      'Customizable stay experience'
    ],
  },
];

const FAQ = [
  {
    question: 'What is included in the pricing?',
    answer: 'All pricing includes accommodation, amenities, and access to our luxurious services.',
  },
  {
    question: 'Is there a cancellation policy?',
    answer: 'Yes, we offer a flexible cancellation policy. Please refer to our terms for details.',
  },
  {
    question: 'How do I make a reservation?',
    answer: 'You can make a reservation directly through our website or by contacting our concierge.',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-black text-pink-500 min-h-screen p-8">
      <motion.div 
        className="text-4xl font-bold mb-8" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Pricing for luxery dark AirBNB
      </motion.h1>
      
      <motion.div 
        className="min-w-full border-collapse border border-pink-500 mb-8"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <thead>
          <tr>
            <th className="border border-pink-500 p-4">Package</th>
            <th className="border border-pink-500 p-4">Price</th>
            <th className="border border-pink-500 p-4">Features</th>
          </tr>
        </thead>
        <tbody>
          {pricingOptions.map((option, index) => (
            <tr key={index} className="hover:bg-pink-500 hover:text-black transition-colors duration-300">
              <td className="border border-pink-500 p-4">{option.title}</td>
              <td className="border border-pink-500 p-4">{option.price}</td>
              <td className="border border-pink-500 p-4">
                <ul>
                  {option.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </motion.table>
      
      <motion.div 
        className="text-3xl font-bold mb-4" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>
      
      <div className="space-y-4">
        {FAQ.map((item, index) => (
          <motion.div 
            key={index} 
            className="bg-gray-800 p-4 rounded-md" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold">{item.question}</h3>
            <p>{item.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;