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
    image: "https://via.placeholder.com/300x200?text=Dagcreme",
  },
  {
    id: 2,
    name: "Anti-Aging Serum",
    price: "€39,99",
    image: "https://via.placeholder.com/300x200?text=Serum",
  },
  {
    id: 3,
    name: "Lippenbalsem met Shea Butter",
    price: "€9,50",
    image: "https://via.placeholder.com/300x200?text=Lippenbalsem",
  },
  {
    id: 4,
    name: "Verzorgende Handcrème",
    price: "€12,00",
    image: "https://via.placeholder.com/300x200?text=Handcreme",
  },
];

const Shop: React.FC = () => {
  return (
    <div className="bg-zinc-100 text-neutral-900 min-h-screen p-6">
      {/* Hero */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <motion.h1
          className="text-5xl font-bold mb-4 text-pink-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          The Beauty Clinic
        </motion.h1>
        <p className="text-lg text-neutral-700">
          Ontdek onze natuurlijke & verzorgende beauty producten
        </p>
      </div>

      {/* Producten */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
              <p className="text-pink-300 font-bold mb-2">{product.price}</p>
              <button className="w-full bg-pink-300 text-white py-2 rounded-xl hover:bg-pink-400 transition">
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