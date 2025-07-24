import React from "react";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Hydraterende Dagcrème",
    price: "€24,95",
    image: "https://via.placeholder.com/400x300?text=Dagcrème",
  },
  {
    id: 2,
    name: "Anti-Aging Serum",
    price: "€39,99",
    image: "https://via.placeholder.com/400x300?text=Serum",
  },
  {
    id: 3,
    name: "Lippenbalsem met Shea Butter",
    price: "€9,50",
    image: "https://via.placeholder.com/400x300?text=Lippenbalsem",
  },
  {
    id: 4,
    name: "Verzorgende Handcrème",
    price: "€12,00",
    image: "https://via.placeholder.com/400x300?text=Handcrème",
  },
];

const Shop: React.FC = () => {
  return (
    <div className="bg-zinc-100 text-neutral-900 min-h-screen px-6 py-10">
      {/* Hero */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold mb-4 text-pink-300 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The Beauty Clinic
        </motion.h1>
        <p className="text-xl text-neutral-700 max-w-xl mx-auto">
          Ontdek onze natuurlijke & verzorgende beauty producten
        </p>
      </div>

      {/* Producten */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover rounded-t-2xl"
            />
            <div className="p-5">
              <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
              <p className="text-pink-300 font-bold text-lg">{product.price}</p>
              <button className="mt-4 w-full bg-pink-300 hover:bg-pink-400 text-white font-medium py-2 rounded-xl transition-all">
                Voeg toe aan winkelwagen
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Shop;