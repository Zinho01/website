import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Tarievenlijst: React.FC = () => {
  const [behandelingen, setBehandelingen] = useState<any[]>([]);

  // Fetching JSON data
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

  return (
    <div className="bg-black text-white min-h-screen px-4 py-6 sm:px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tarievenlijst Behandelingen
        </motion.h1>

        {/* Check if behandelingen is loaded */}
        {behandelingen.length === 0 ? (
          <div className="text-center text-gray-400">Loading...</div>
        ) : (
          behandelingen.map((groep, i) => (
            <motion.div
              key={i}
              className="bg-neutral-800 p-4 sm:p-6 rounded-lg shadow-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">
                {groep.categorie}
              </h2>

              {/* Render the items in the main categorie if they exist */}
              {groep.items && groep.items.length > 0 && (
                <ul className="divide-y divide-gray-700">
                  {groep.items.map((item: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; time: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, k: React.Key | null | undefined) => (
                    <li key={k} className="flex flex-wrap justify-between py-2 text-sm sm:text-base text-gray-400">
                      <span className="w-2/3">{item.name}</span>
                      <span className="w-1/3 text-right">{item.price}</span>
                      <span className="w-full text-right text-xs text-gray-500">{item.time}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Check if subcategorie is defined and loop through it */}
              {groep.subcategorie && groep.subcategorie.length > 0 ? (
                groep.subcategorie.map((subcat: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; items: any[]; }, j: React.Key | null | undefined) => (
                  <div key={j} className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-400">{subcat.name}</h3>

                    <ul className="divide-y divide-gray-700">
                      {/* Loop through items of each subcategory */}
                      {subcat.items.map((item, k) => (
                        <li key={k} className="flex flex-wrap justify-between py-2 text-sm sm:text-base text-gray-400">
                          <span className="w-2/3">{item.name}</span>
                          <span className="w-1/3 text-right">{item.price}</span>
                          <span className="w-full text-right text-xs text-gray-500">{item.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <div className="text-gray-500">No subcategories available</div>
              )}
            </motion.div>
          ))
        )}

        <div className="text-center mt-8">
          <a
            href="https://the-beauty-clinic-3.salonized.com/widget_bookings/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="bg-neutral-500 hover:bg-gray-400 text-white px-6 py-3 rounded-lg transition duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
            >
              Boek een Afspraak
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tarievenlijst;
