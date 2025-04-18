import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ClinicInfo {
  [key: string]: string | { [subkey: string]: string | string[] };
}

const OnzeKliniek: React.FC = () => {
  const [clinicData, setClinicData] = useState<ClinicInfo | null>(null);

  useEffect(() => {
    fetch("/clinicData.json")
      .then((response) => response.json())
      .then((data) => setClinicData(data))
      .catch((error) => console.error("Error loading clinic data:", error));
  }, []);

  if (!clinicData) {
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
          Welkom bij Onze Kliniek
        </motion.h1>
        <p className="text-lg text-gray-400 mb-6">
          Bij Onze Kliniek bieden we professionele zorg en behandelingen op maat, zodat je je op je best voelt.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-neutral-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">Onze Missie</h2>
            <p className="text-gray-400 mb-4">
            Ons enthousiaste en ervaren team biedt behandelingen in een veilige en hygiënische omgeving, altijd met persoonlijke aandacht. Met veel ervaring zorgen we ervoor dat u zich welkom en op uw gemak voelt, terwijl we samen werken aan het beste resultaat.
            Ontdek wat wij voor u kunnen betekenen en ervaar zelf onze betrokkenheid en zorg.
            </p>
          </div>

          <div className="bg-neutral-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">Onze Visie</h2>
            <p className="text-gray-400 mb-4">
              We streven ernaar om een toonaangevende kliniek te zijn die klantgerichte zorg levert. Wij geloven in een holistische benadering
              waarbij we niet alleen de esthetische resultaten verbeteren, maar ook zorgen voor een rustgevende en comfortabele ervaring.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-4 text-gray-300">Onze Diensten</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(clinicData?.Diensten || {}).map(([service, description]) => (
              <motion.div
                key={service}
                className="bg-neutral-800 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-gray-300">{service}</h3>
                <p className="text-gray-400">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>

          <div className="mt-10 border border-gray-600 rounded-xl p-6 bg-neutral-800 shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-gray-300">Waarom Kiezen voor Onze Kliniek?</h2>
            <ul className="list-disc text-gray-400 text-left space-y-2">
              <li>✔️ Professionele zorg met gecertificeerde specialisten</li>
              <li>✔️ De nieuwste technologieën en behandelingsmethoden</li>
              <li>✔️ Aandacht voor jouw comfort en welzijn</li>
              <li>✔️ Resultaatgerichte benadering voor langdurige tevredenheid</li>
            </ul>
          </div>

          <a href="/afspraak" className="inline-block mt-6">
            <motion.button
              className="bg-neutral-500 hover:bg-gray-400 text-white px-6 py-3 rounded-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Maak een Afspraak
            </motion.button>
          </a>
      </div>
    </div>
  );
};

export default OnzeKliniek;