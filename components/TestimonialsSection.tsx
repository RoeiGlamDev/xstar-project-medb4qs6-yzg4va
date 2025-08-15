import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  photo: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Emily Johnson',
    photo: '/images/emily.jpg',
    review: 'Staying at luxery dark AirBNB was a game changer for my business trips. The tech amenities were top-notch!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Lee',
    photo: '/images/michael.jpg',
    review: 'The seamless check-in process and smart home features made my stay incredibly convenient.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Sophia Patel',
    photo: '/images/sophia.jpg',
    review: 'I loved the high-end design and the elegant ambiance. Perfect for my luxury getaway!',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-black text-pink-500 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Guests Say About luxery dark AirBNB</h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-gray-800 rounded-lg p-6 m-4 shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <img src={testimonial.photo} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <span key={index} className="text-pink-500">★</span>
                ))}
                {[...Array(5 - testimonial.rating)].map((_, index) => (
                  <span key={index} className="text-gray-400">★</span>
                ))}
              </div>
              <p className="text-gray-300">{testimonial.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;