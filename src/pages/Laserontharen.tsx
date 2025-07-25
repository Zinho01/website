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
      <div className="bg-zinc-100 text-black min-h-screen p-6 flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-100 text-black min-h-screen p-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl font-bold mb-4 text-pink-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Laserontharing
        </motion.h1>
        <p className="text-lg text-black mb-6">
          Ontdek de voordelen van professionele laserontharing en geniet van een gladde huid zonder ongewenste haargroei.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Laser Ontharing */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-left">
            <h2 className="text-2xl font-semibold text-pink-300 mb-4">
              Laser Ontharing: Efficiënte en Langdurige Oplossing
            </h2>
            <p className="text-black mb-4">
              Laserontharing – Voor een zijdezachte huid, blijvend glad
              Ben je klaar met scheren, waxen of epileren? Kies voor laserontharing! Met geavanceerde technologie verwijderen we ongewenste haartjes veilig, snel en langdurig. Geschikt voor alle huidtypes en vrijwel elk lichaamsdeel.
              Effectief en duurzaam resultaat. Boek een vrijblijvende intake en ervaar het zelf met een gratis testbehandeling!
            </p>
            <ul className="text-black space-y-2 list-disc ml-6">
              <li>✔️ Geschikt voor gezicht en lichaam</li>
              <li>✔️ Voor de meeste huid- en haartypes</li>
              <li>✔️ Veilig</li>
              <li>✔️ Voor een lange periode</li>
            </ul>
            <p className="text-black mt-4">
              Kies voor laserontharing en geniet van een gladde, haartvrije huid zonder terugkerende haargroei!
            </p>
          </div>

          {/* Elektrische Epilatie */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-left">
            <h2 className="text-2xl font-semibold text-pink-300 mb-4">
              Elektrische Epilatie: De Duurzame Oplossing voor Haarverwijdering
            </h2>
            <p className="text-black mb-4">
              Elektrische epilatie biedt een langdurige oplossing voor ongewenst haar. Door middel van een fijne naald wordt een stroompuls toegediend die het haarzakje permanent vernietigt. Deze techniek is geschikt voor alle huidtypes en haarkleuren, en zorgt voor een gladde huid zonder terugkerende haargroei. Veilig, effectief en langdurig resultaat!
            </p>
            <ul className="text-black space-y-2 list-disc ml-6">
              <li>✔️ Permanente haarverwijdering</li>
              <li>✔️ Geschikt voor gezicht en lichaam</li>
              <li>✔️ Voor alle huid- en haartypes</li>
              <li>✔️ Veilig en professioneel uitgevoerd</li>
            </ul>
            <p className="text-black mt-4">
              Ervaar de voordelen van elektrische epilatie en zeg voorgoed vaarwel tegen haargroei!
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-4 text-pink-300">Prijslijst</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(pricingData).map(([category, items]) => (
              <motion.div
                key={category}
                className="bg-white p-6 rounded-lg shadow-lg text-left"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-pink-300 border-b border-pink-300 pb-2 mb-3">
                  {category}
                </h3>
                <ul className="text-black space-y-2">
                  {category === "Pakketten" ? (
                    Object.entries(items).map(([pakketNaam, details]) => (
                      <li key={pakketNaam} className="mb-4">
                        <span className="font-bold text-pink-300">{pakketNaam}</span> -{" "}
                        <span className="text-green-600">
                          €{typeof details === "object" && "Prijs" in details ? details.Prijs : details}
                        </span>
                        <ul className="ml-6 text-sm text-black list-disc mt-1">
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

        <a
          href="https://the-beauty-clinic-3.salonized.com/widget_bookings/new"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6"
        >
          <motion.button
            className="bg-neutral-900 hover:bg-pink-300 text-white px-6 py-3 rounded-lg transition duration-300"
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