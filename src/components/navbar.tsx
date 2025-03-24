import React, { useState } from 'react';
import { motion } from 'framer-motion';
import lotusImage from '../assets/lotus.png';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-neutral-900 p-4">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <div>
                    <img 
                        src={lotusImage} 
                        alt="lotus-foto" 
                        className="w-12 h-12 hover:bg-neutral-800 rounded-full transition-all duration-300" 
                    />
                </div>
                {/* Desktop Navbar: Only shown when screen size is larger than 768px (md) */}
                <div className="hidden lg:flex space-x-4">
                    <a href="main.tsx" className="text-white hover:text-gray-400 px-3 py-2 rounded-md">Home</a>
                    <a href="#huidaandoening" className="text-white hover:text-gray-400 px-3 py-2 rounded-md">huidaandoening</a>
                    <a href="#laserontharen" className="text-white hover:text-gray-400 px-3 py-2 rounded-md">laserontharen</a>
                    <a href="#acepunctuur" className="text-white hover:text-gray-400 px-3 py-2 rounded-md">acepunctuur</a>
                    <a href="#tarieven" className="text-white hover:text-gray-400 px-3 py-2 rounded-md">tarieven</a>
                    <a href="#onze kliniek" className="text-white hover:text-gray-400 px-3 py-2 rounded-md">onze kliniek</a>
                    <a href="#contact" className="text-white hover:text-gray-400 px-3 py-2 rounded-md">contact</a>
                    <a href="shop" className="text-white hover:text-gray-400 px-3 py-2 rounded-md">shop</a>
                    <a href="apointment">
                        <button className="bg-neutral-500 hover:bg-gray-400 text-white px-4 py-2 rounded-md transition-colors duration-300">Gratis consult</button>
                    </a>
                </div>

                {/* Mobile / Tablet Hamburger Menu */}
                <div className="lg:hidden flex items-center ml-4">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile / Tablet Menu with Framer Motion Animation */}
            <motion.div
                className={`lg:hidden bg-neutral-900 text-white space-y-4 py-4 px-6 w-full ${isOpen ? 'block' : 'hidden'}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                exit={{ opacity: 0, y: -20 }}
            >
                <a href="main.tsx" className="block hover:text-gray-400 px-3 py-2 rounded-md">Home</a>
                <a href="#huidaandoening" className="block hover:text-gray-400 px-3 py-2 rounded-md">huidaandoening</a>
                <a href="#laserontharen" className="block hover:text-gray-400 px-3 py-2 rounded-md">laserontharen</a>
                <a href="#acepunctuur" className="block hover:text-gray-400 px-3 py-2 rounded-md">acepunctuur</a>
                <a href="#tarieven" className="block hover:text-gray-400 px-3 py-2 rounded-md">tarieven</a>
                <a href="#onze kliniek" className="block hover:text-gray-400 px-3 py-2 rounded-md">onze kliniek</a>
                <a href="#contact" className="block hover:text-gray-400 px-3 py-2 rounded-md">contact</a>
                <a href="shop" className="block hover:text-gray-400 px-3 py-2 rounded-md">shop</a>
                <a href="apointment">
                    <button className="bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded-md transition-colors duration-300 w-full text-center">Gratis consult</button>
                </a>
            </motion.div>
        </nav>
    );
};

export default Navbar;