import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  onSubscribe: (email: string) => void;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ onSubscribe }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    onSubscribe(email);
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <section className="bg-black text-pink-500 py-12 px-4">
      <motion.div
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Subscribe to luxery dark AirBNB Newsletter
      </motion.h2>
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Stay updated with the latest luxury listings and technology innovations at luxery dark AirBNB.
      </motion.p>
      <form onSubmit={handleSubmit} className="flex justify-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          className="border-2 border-pink-500 bg-black text-white px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <motion.div
          type="submit"
          disabled={isSubmitting}
          className="bg-pink-500 text-black px-4 py-2 rounded-r hover:bg-pink-600 transition duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </motion.button>
      </form>
    </section>
  );
};

export default NewsletterSection;