import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface PricingData {
  [category: string]: {
    [item: string]: number | { Prijs: number; Inbegrepen: string[] };
  };
}

const Laserontharen: React.FC = () => {
  const [pricingData, setPricingData] = useState<PricingData | null>(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setPricingData(data))
      .catch((error) => console.error("Error loading pricing data:", error));
  }, []);

  if (!pricingData) {
    return (
      <div className="bg-black text-white min-h-screen p-6 flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl font-bold mb-4 text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Laserontharing
        </motion.h1>
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

        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-4 text-gray-300">Prijslijst</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(pricingData).map(([category, items]) => (
              <motion.div
                key={category}
                className="bg-neutral-800 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-gray-300 border-b pb-2 mb-3">{category}</h3>
                <ul className="text-gray-400 space-y-2">
                  {/* case for the pakketen data en een tweede case voor de data van de pakketen */}
                  {category === "Pakketten" ? (
                    Object.entries(items).map(([pakketNaam, details]) => (
                      <li key={pakketNaam} className="mb-4">
                        <span className="font-bold text-gray-200">{pakketNaam}</span> - 
                        <span className="text-green-400">
                          €{typeof details === "object" && "Prijs" in details ? details.Prijs : details}
                        </span>
                        <ul className="ml-4 text-sm text-gray-400 list-disc mt-1">
                          {typeof details === "object" && "Inbegrepen" in details && details.Inbegrepen.length > 0 ? (
                            details.Inbegrepen.map((item: string, index: number) => (
                              <li key={index}>{item}</li>
                            ))
                          ) : (
                            <li>Geen items inbegrepen</li>
                          )}
                        </ul>
                      </li>
                    ))
                  ) : (
                    Object.entries(items).map(([item, price]) => (
                      <li key={item} className="flex justify-between">
                        <span>{item}</span>
                        <span className="font-bold">
                          €{typeof price === "number" ? price : price.Prijs}
                        </span>
                      </li>
                    ))
                  )}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <a href="/apointment" className="inline-block mt-6">
          <motion.button
            className="bg-neutral-500 hover:bg-gray-400 text-white px-6 py-3 rounded-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Boek een Gratis Consult
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default Laserontharen;