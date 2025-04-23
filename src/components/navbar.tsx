import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
                <div className="hidden lg:flex space-x-4">
                    <Link to="/" className="text-white hover:text-orange-200 px-3 py-2 rounded-md">Home</Link>
                    <Link to="/huidaandoening" className="text-white hover:text-orange-200 px-3 py-2 rounded-md">huidaandoening</Link>
                    <Link to="/laserontharen" className="text-white hover:text-orange-200 px-3 py-2 rounded-md">laserontharen</Link>
                    <Link to="/acupunctuur" className="text-white hover:text-orange-200 px-3 py-2 rounded-md">acupunctuur</Link>
                    <Link to="/tarieven" className="text-white hover:text-orange-200 px-3 py-2 rounded-md">tarieven</Link>
                    <Link to="/onze-kliniek" className="text-white hover:text-orange-200 px-3 py-2 rounded-md">onze kliniek</Link>
                    <Link to="/contact" className="text-white hover:text-orange-200 px-3 py-2 rounded-md">contact</Link>
                    <Link to="/shop" className="text-white hover:text-orange-200 px-3 py-2 rounded-md">shop</Link>
                    <Link to="/contact">
                        <button className="bg-neutral-500 hover:bg-orange-200 text-white px-4 py-2 rounded-md transition-colors duration-300">Gratis consult</button>
                    </Link>
                </div>

                <div className="lg:hidden flex items-center ml-4">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6"fill="none"stroke="currentColor"viewBox="0 0 24 24"xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round"strokeLinejoin="round"strokeWidth="2"d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className={`lg:hidden bg-neutral-900 text-white space-y-4 py-4 px-6 w-full ${isOpen ? 'block' : 'hidden'}`}initial={{ opacity: 0, y: -20 }}animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}transition={{ type: 'spring', stiffness: 300, damping: 25 }}exit={{ opacity: 0, y: -20 }}>
                <Link to="/" className="block hover:text-orange-200 px-3 py-2 rounded-md">Home</Link>
                <Link to="/huidaandoening" className="block hover:text-orange-200 px-3 py-2 rounded-md">huidaandoening</Link>
                <Link to="/laserontharen" className="block hover:text-orange-200 px-3 py-2 rounded-md">laserontharen</Link>
                <Link to="/acupunctuur" className="block hover:text-orange-200 px-3 py-2 rounded-md">acupunctuur</Link>
                <Link to="/tarieven" className="block hover:text-orange-200 px-3 py-2 rounded-md">tarieven</Link>
                <Link to="/onze-kliniek" className="block hover:text-orange-200 px-3 py-2 rounded-md">onze kliniek</Link>
                <Link to="/contact" className="block hover:text-orange-200 px-3 py-2 rounded-md">contact</Link>
                <Link to="/shop" className="block hover:text-orange-200 px-3 py-2 rounded-md">shop</Link>
                <Link to="/contact"><button className="bg-gray-500 hover:text-orange-200 text-white px-4 py-2 rounded-md transition-colors duration-300 w-full text-center">Gratis consult</button>
                </Link>
            </motion.div>
        </nav>
    );
};

export default Navbar;