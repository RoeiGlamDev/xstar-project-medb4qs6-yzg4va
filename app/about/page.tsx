import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
    name: string;
    position: string;
    image: string;
}

const teamMembers: TeamMember[] = [
    {
        name: 'Alice Johnson',
        position: 'Founder & CEO',
        image: '/images/alice.jpg'
    },
    {
        name: 'Bob Smith',
        position: 'CTO',
        image: '/images/bob.jpg'
    },
    {
        name: 'Charlie Brown',
        position: 'Lead Developer',
        image: '/images/charlie.jpg'
    }
];

const AboutPage: React.FC = () => {
    return (
        <div className="bg-black text-pink-500 min-h-screen flex flex-col">
            <motion.header 
                className="p-6 text-center"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold">About luxery dark AirBNB</h1>
                <p className="mt-4 text-lg">Where luxury meets technology in the dark.</p>
            </motion.header>

            <main className="flex-grow p-6">
                <section className="mb-12">
                    <motion.div 
                        className="text-3xl font-semibold mb-4"
                        initial={{ y: -50 }} 
                        animate={{ y: 0 }} 
                        transition={{ duration: 0.5 }}
                    >
                        Our History
                    </motion.h2>
                    <p>
                        At luxery dark AirBNB, we have redefined the way people experience luxury accommodations through our innovative technology solutions. Founded in 2021, we have rapidly grown into a leader in the technology-driven hospitality industry, providing unparalleled service and unique experiences for our guests.
                    </p>
                </section>

                <section className="mb-12">
                    <motion.div 
                        className="text-3xl font-semibold mb-4"
                        initial={{ y: -50 }} 
                        animate={{ y: 0 }} 
                        transition={{ duration: 0.5 }}
                    >
                        Our Values
                    </motion.h2>
                    <ul className="list-disc list-inside">
                        <li>Innovation: We harness cutting-edge technology to enhance our services.</li>
                        <li>Luxury: Every detail is crafted to provide an exceptional experience.</li>
                        <li>Integrity: We are committed to transparency and ethical practices.</li>
                        <li>Customer-Centric: Our guests' satisfaction is our priority.</li>
                    </ul>
                </section>

                <section>
                    <motion.div 
                        className="text-3xl font-semibold mb-4"
                        initial={{ y: -50 }} 
                        animate={{ y: 0 }} 
                        transition={{ duration: 0.5 }}
                    >
                        Meet Our Team
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {teamMembers.map((member) => (
                            <motion.div 
                                key={member.name} 
                                className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition duration-300"
                                whileHover={{ scale: 1.05 }}
                            >
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="w-32 h-32 rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-sm">{member.position}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AboutPage;