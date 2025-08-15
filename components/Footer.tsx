import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
    companyName: string;
    links: { name: string; url: string }[];
    socialMedia: { platform: string; url: string }[];
}

const Footer: React.FC<FooterProps> = () => {
    const companyName = "luxery dark AirBNB";
    const links = [
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' },
        { name: 'Services', url: '/services' },
        { name: 'Contact', url: '/contact' },
        { name: 'Privacy Policy', url: '/privacy' },
    ];
    
    const socialMedia = [
        { platform: 'Facebook', url: 'https://facebook.com/luxerydarkairbnb' },
        { platform: 'Twitter', url: 'https://twitter.com/luxerydarkairbnb' },
        { platform: 'Instagram', url: 'https://instagram.com/luxerydarkairbnb' },
    ];

    return (
        <footer className="bg-black text-pink-500 py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <motion.div
                    className="text-2xl font-bold mb-4 md:mb-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {companyName}
                </motion.h2>

                <nav className="flex flex-col md:flex-row">
                    {links.map((link) => (
                        <motion.div
                            key={link.name}
                            href={link.url}
                            className="text-pink-400 hover:text-pink-300 transition duration-300 mx-2"
                            whileHover={{ scale: 1.05 }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </nav>

                <div className="flex mt-4 md:mt-0">
                    {socialMedia.map((media) => (
                        <motion.div
                            key={media.platform}
                            href={media.url}
                            className="text-pink-400 hover:text-pink-300 transition duration-300 mx-2"
                            whileHover={{ scale: 1.05 }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {media.platform}
                        </motion.a>
                    ))}
                </div>
            </div>
            <div className="text-center text-sm mt-4 border-t border-pink-700 pt-4">
                <p>© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
                <p>Elevating technology-driven luxury stays for discerning travelers.</p>
            </div>
        </footer>
    );
};

export default Footer;