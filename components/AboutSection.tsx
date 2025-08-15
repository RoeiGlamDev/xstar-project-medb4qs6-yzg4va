import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  expertise: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alice Johnson',
    role: 'CEO & Founder',
    expertise: 'Technology Strategy and Innovation',
  },
  {
    name: 'Bob Smith',
    role: 'CTO',
    expertise: 'Cloud Computing and Data Security',
  },
  {
    name: 'Charlie Brown',
    role: 'Lead Developer',
    expertise: 'Full Stack Development and AI Solutions',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-black text-pink-500 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Story
        </motion.h2>
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          At luxery dark AirBNB, we revolutionize the way people experience luxury
          stays through cutting-edge technology. Our journey began with the vision
          of creating a seamless, high-end rental experience that leverages
          advanced tech solutions for both hosts and guests. We focus on
          integrating smart home features, AI-driven customer service, and a user-friendly
          platform that embodies elegance while ensuring data security and privacy.
        </motion.p>
        
        <motion.div
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Mission
        </motion.h2>
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          The mission of luxery dark AirBNB is to set a new standard in luxury
          accommodations by utilizing technology to enhance the guest experience.
          We aim to provide a platform that connects discerning travelers with
          exquisite properties, ensuring that every stay is not just a visit, but
          a memorable experience filled with comfort and sophistication.
        </motion.p>

        <motion.div
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-pink-400">{member.role}</p>
              <p className="mt-2 text-gray-300">{member.expertise}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-3xl font-bold mb-6 mt-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
        >
          Our Values
        </motion.h2>
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          At luxery dark AirBNB, we believe in innovation, integrity, and excellence.
          Our commitment to these values drives us to continuously improve our services,
          ensuring that we meet the highest standards of quality and customer satisfaction.
        </motion.p>

        <motion.div
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.2 }}
        >
          Our Achievements
        </motion.h2>
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5 }}
        >
          We are proud to have been recognized as a leader in luxury rentals, showcasing
          properties that set the benchmark for elegance and technological integration.
          Our innovative approach has garnered awards and accolades within the industry,
          affirming our position as a trusted partner for luxury travel.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;