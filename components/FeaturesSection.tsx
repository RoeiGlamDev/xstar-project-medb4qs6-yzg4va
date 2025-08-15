import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
    title: string;
    description: string;
    icon: JSX.Element;
}

const features: Feature[] = [
    {
        title: 'Smart Home Integration',
        description: 'Experience seamless control of your environment with cutting-edge smart home technology.',
        icon: <i className="fas fa-home"></i>
    },
    {
        title: 'High-Speed Internet',
        description: 'Stay connected with lightning-fast Wi-Fi, perfect for remote work and streaming.',
        icon: <i className="fas fa-wifi"></i>
    },
    {
        title: 'Luxury Accommodations',
        description: 'Indulge in high-end furnishings and decor that elevate your stay at luxery dark AirBNB.',
        icon: <i className="fas fa-bed"></i>
    },
    {
        title: '24/7 Customer Support',
        description: 'Our dedicated team is here to assist you around the clock, ensuring a hassle-free experience.',
        icon: <i className="fas fa-headset"></i>
    },
];

const FeaturesSection: React.FC = () => {
    return (
        <section className="bg-black text-pink-500 py-12">
            <div className="container mx-auto text-center">
                <motion.div
                    className="text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Discover the Features of luxery dark AirBNB
                </motion.h2>
                <motion.div
                    className="text-lg mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Immerse yourself in technology-driven luxury designed for the modern traveler.
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-900 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="text-6xl mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;