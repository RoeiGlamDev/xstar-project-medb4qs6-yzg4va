import React from 'react';
import { motion } from 'framer-motion';

interface StatsSectionProps {
    achievements: number;
    satisfiedClients: number;
    propertiesManaged: number;
    bookingsMade: number;
}

const StatsSection: React.FC<StatsSectionProps> = ({
    achievements,
    satisfiedClients,
    propertiesManaged,
    bookingsMade,
}) => {
    return (
        <section className="bg-black text-pink-500 py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Achievements of luxery dark AirBNB</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <motion.div 
                        className="bg-gray-800 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                    >
                        <h3 className="text-3xl font-semibold">{achievements}</h3>
                        <p className="text-lg">Total Achievements</p>
                    </motion.div>
                    <motion.div 
                        className="bg-gray-800 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                    >
                        <h3 className="text-3xl font-semibold">{satisfiedClients}</h3>
                        <p className="text-lg">Satisfied Clients</p>
                    </motion.div>
                    <motion.div 
                        className="bg-gray-800 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                    >
                        <h3 className="text-3xl font-semibold">{propertiesManaged}</h3>
                        <p className="text-lg">Properties Managed</p>
                    </motion.div>
                    <motion.div 
                        className="bg-gray-800 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                    >
                        <h3 className="text-3xl font-semibold">{bookingsMade}</h3>
                        <p className="text-lg">Bookings Made</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;