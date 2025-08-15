import { useState } from 'react';
import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formState, setFormState] = React.useState<ContactFormState>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-black text-pink-500 min-h-screen flex flex-col justify-center items-center">
      <motion.div
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact luxery dark AirBNB
      </motion.h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
          <label className="block text-sm font-semibold" htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formState.name}
            onChange={handleChange}
            className="w-full p-2 rounded border border-pink-500 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
            className="w-full p-2 rounded border border-pink-500 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold" htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={formState.message}
            onChange={handleChange}
            className="w-full p-2 rounded border border-pink-500 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200"
            required
          />
        </div>
        <motion.div
          type="submit"
          className="bg-pink-500 text-black font-semibold py-2 px-4 rounded hover:bg-pink-400 transition duration-200"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold">Business Hours</h2>
        <p className="text-lg">Monday - Friday: 9 AM - 6 PM</p>
        <p className="text-lg">Saturday: 10 AM - 4 PM</p>
        <p className="text-lg">Sunday: Closed</p>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold">Location</h2>
        <p className="text-lg">123 Luxery Lane, Tech City, CA 90210</p>
      </div>
    </div>
  );
};

export default Contact;