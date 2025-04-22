import React from "react";
import { motion } from "framer-motion";

const Laserontharen: React.FC = () => {
return (
    <div className="bg-black text-white min-h-screen p-6">
    <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
        className="text-4xl font-bold mb-4 text-gray-200" initial={{ opacity: 0, y: -20 }}animate={{ opacity: 1, y: 0 }}transition={{ duration: 0.5 }}>Laserontharing</motion.h1>
        <p className="text-lg text-gray-400 mb-6">
        Ontdek de voordelen van professionele laserontharing en geniet van een gladde huid zonder ongewenste haargroei.
        </p>
        <div className="bg-neutral-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">Waarom kiezen voor laserontharing?</h2>
        <ul className="text-gray-400 space-y-2 text-left">
            <li>✔️ Langdurig resultaat</li>
            <li>✔️ Veilig en effectief</li>
            <li>✔️ Geschikt voor verschillende huidtypes</li>
            <li>✔️ Geen ingegroeide haartjes</li>
        </ul>
        </div>
        <a href="/contact" className="inline-block mt-6">
        <motion.button className="bg-neutral-500 hover:bg-gray-400 text-white px-6 py-3 rounded-lg transition duration-300"whileHover={{ scale: 1.05 }}>Boek een Gratis Consult</motion.button>
        </a>
    </div>
    </div>
);
};

export default Laserontharen;