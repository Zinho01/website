import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function OnzeKliniek() {
  const [clinicData, setClinicData] = useState(null);

  useEffect(() => {
    fetch("/clinicData.json")
      .then((response) => response.json())
      .then((data) => setClinicData(data))
      .catch((error) => console.error("Error loading clinic data:", error));
  }, []);

  if (!clinicData) {
    return (
      <div className="bg-zinc-100 text-neutral-900 min-h-screen p-6 flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-100 text-neutral-900 min-h-screen p-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl font-bold mb-4 text-pink-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welkom bij Onze Kliniek
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-pink-200 mb-4">Onze Missie</h2>
            <p className="text-neutral-700 mb-4">
              Ons enthousiaste en ervaren team biedt behandelingen in een veilige en hygiënische omgeving, altijd met persoonlijke aandacht. Met veel ervaring zorgen we ervoor dat u zich welkom en op uw gemak voelt, terwijl we samen werken aan het beste resultaat. Ontdek wat wij voor u kunnen betekenen en ervaar zelf onze betrokkenheid en zorg.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-pink-200 mb-4">Onze Visie</h2>
            <p className="text-neutral-700 mb-4">
              We streven ernaar om een toonaangevende kliniek te zijn die klantgerichte zorg levert. Wij geloven in een holistische benadering waarbij we niet alleen de esthetische resultaten verbeteren, maar ook zorgen voor een rustgevende en comfortabele ervaring.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-4 text-pink-200">Onze Diensten</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(clinicData?.Diensten || {}).map(([service, description]) => (
              <motion.div
                key={service}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-pink-300">{service}</h3>
                <p className="text-neutral-700">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 border border-neutral-400 rounded-xl p-6 bg-white shadow-lg text-left">
          <h2 className="text-3xl font-bold mb-4 text-pink-200">Waarom Kiezen voor Onze Kliniek?</h2>
          <ul className="list-disc text-neutral-700 space-y-2 pl-5">
            <li> Professionele zorg met specialisten</li>
            <li> Aandacht voor jouw comfort en welzijn</li>
            <li> Resultaatgerichte benadering</li>
          </ul>
        </div>
      </div>
    </div>
  );
}