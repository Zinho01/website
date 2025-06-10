import React from "react";
import { motion } from "framer-motion";

const Laserontharen: React.FC = () => {
  return (
    <div className="bg-zinc-100 text-neutral-900 min-h-screen p-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl font-bold mb-4 text-pink-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          deze pagina is nog niet af
        </motion.h1>
      </div>
    </div>
  );
};

export default Laserontharen;