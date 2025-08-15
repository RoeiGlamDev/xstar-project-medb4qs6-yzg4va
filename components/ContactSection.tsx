import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    reason: 'Inquiry',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    // Send form data to the server or API here
  };

  return (
    <section className="bg-black text-pink-500 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Contact luxery dark AirBNB</h2>
      <p className="mb-6">For technology inquiries, please fill out the form below.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={w-full p-2 rounded border ${errors.name ? 'border-red-500' : 'border-pink-300'} bg-gray-800 text-pink-500}
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={w-full p-2 rounded border ${errors.email ? 'border-red-500' : 'border-pink-300'} bg-gray-800 text-pink-500}
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block mb-1">Reason for Contact</label>
          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="w-full p-2 rounded border border-pink-300 bg-gray-800 text-pink-500"
          >
            <option value="Inquiry">Inquiry</option>
            <option value="Partnership">Partnership</option>
            <option value="Support">Support</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={w-full p-2 rounded border ${errors.message ? 'border-red-500' : 'border-pink-300'} bg-gray-800 text-pink-500}
            rows={4}
            required
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <motion.div
          type="submit"
          className="bg-pink-500 text-black font-bold py-2 px-4 rounded transition duration-200 hover:bg-pink-600"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>
      {submitted && <p className="mt-4 text-green-500">Thank you for your message!</p>}
      <div className="mt-8">
        <h3 className="text-xl font-semibold">Business Information</h3>
        <p>Address: 123 Tech Lane, Silicon Valley, CA 94043</p>
        <p>Business Hours: Mon-Fri, 9 AM - 5 PM</p>
      </div>
    </section>
  );
};

export default ContactSection;