import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Tarievenlijst() {
  const [behandelingen, setBehandelingen] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Tarieven.json");
        const data = await response.json();
        setBehandelingen(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleCategorie = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-zinc-100 text-neutral-900 min-h-screen px-4 py-6 sm:px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold mb-6 text-center text-pink-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tarievenlijst Behandelingen
        </motion.h1>

        {behandelingen.length === 0 ? (
          <div className="text-center text-neutral-600">Loading...</div>
        ) : (
          behandelingen.map((groep, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-lg mb-4 overflow-hidden"
            >
              <button
                onClick={() => toggleCategorie(i)}
                className="w-full flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4 text-left text-lg sm:text-xl font-semibold text-pink-200 focus:outline-none"
              >
                {groep.categorie}
                <span className="ml-2 text-neutral-500">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    className="px-4 pb-4 sm:px-6 sm:pb-6"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Items */}
                    {groep.items && groep.items.length > 0 && (
                      <ul className="divide-y divide-neutral-300">
                        {groep.items.map((item, k) => (
                          <li
                            key={k}
                            className="flex flex-wrap justify-between py-2 text-sm sm:text-base text-neutral-700"
                          >
                            <span className="w-2/3">{item.name}</span>
                            <span className="w-1/3 text-right">{item.price}</span>
                            <span className="w-full text-right text-xs text-neutral-400">
                              {item.time}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Subcategorieën */}
                    {groep.subcategorie && groep.subcategorie.length > 0 && (
                      <div className="mt-4">
                        {groep.subcategorie.map((subcat, j) => (
                          <div key={j} className="mb-4">
                            <h3 className="text-md sm:text-lg font-semibold text-neutral-600 mb-2">
                              {subcat.name}
                            </h3>
                            <ul className="divide-y divide-neutral-300">
                              {subcat.items.map((item, k) => (
                                <li
                                  key={k}
                                  className="flex flex-wrap justify-between py-2 text-sm sm:text-base text-neutral-700"
                                >
                                  <span className="w-2/3">{item.name}</span>
                                  <span className="w-1/3 text-right">{item.price}</span>
                                  <span className="w-full text-right text-xs text-neutral-400">
                                    {item.time}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))
        )}

        <div className="text-center mt-8">
          <a
            href="/contact"

          >
            <motion.button
              className="bg-neutral-900 hover:bg-pink-300 text-white px-6 py-3 rounded-lg transition duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
            >
              Boek een Afspraak
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
}