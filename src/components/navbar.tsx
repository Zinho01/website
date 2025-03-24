import React from 'react';
import lotusImage from '../assets/lotus.png';

const Navbar: React.FC = () => {
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
                <div className="space-x-4">
                    <a href="#" className="text-white px-3 py-2 rounded-md">Home</a>
                    <a href="#about" className="text-white px-3 py-2 rounded-md">huidaandoening</a>
                    <a href="#services" className="text-white px-3 py-2 rounded-md">laserotharen</a>
                    <a href="#contact" className="text-white px-3 py-2 rounded-md">acepunctuur</a>
                    <a href="#contact" className="text-white px-3 py-2 rounded-md">tarieven</a>
                    <a href="#contact" className="text-white px-3 py-2 rounded-md">onze kliniek</a>
                    <a href="#contact" className="text-white px-3 py-2 rounded-md">contact</a>
                    <a href="#" className="text-white px-3 py-2 rounded-md">shop</a>
                    <a href="#" className="text-white px-3 py-2 rounded-md"><button>Gratis consult</button></a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;