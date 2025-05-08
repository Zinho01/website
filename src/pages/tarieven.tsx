import React from "react";
import { motion } from "framer-motion";

const Tarievenlijst: React.FC = () => {
  const behandelingen = [
    {
      categorie: "Huidbehandelingen",
      items: [
        ["Dermapen", "€120"],
        ["Microdermabrasie", "€75"],
        ["Peeling", "€70"],
        ["Facial", "€55"],
        ["Acne behandeling", "€65"],
      ],
    },
    {
      categorie: "Coagulatie behandeling",
      items: [["Verwijderen van huidoneffenheden", "Vanaf €45"]],
    },
    {
      categorie: "Harsen / Waxen",
      items: [
        ["Bovenlip", "€10"],
        ["Kin", "€10"],
        ["Oksels", "€17"],
        ["Bikinilijn", "€25"],
        ["Onderbenen", "€30"],
        ["Volledige benen", "€45"],
      ],
    },
    {
      categorie: "Epileren & Verven",
      items: [
        ["Epileren met touw", "€15"],
        ["Epileren met pincet", "€12"],
        ["Wenkbrauwen verven", "€12"],
        ["Wimpers verven", "€14"],
      ],
    },
    {
      categorie: "Traditionele behandelingen",
      items: [
        ["Acupunctuur (30 min)", "50"],
        ["Oor acupunctuur (30 min)", "€50"],
        ["Tuina massage (30 min)", "€50"],
        ["Laser therapie (30 min) ", "€50"],
        ["Hijama (30 min) ", "€50"],
        ["Cupping(dry) (30 min) ", "€50"],
        ["Cupping(wet) (30 min) ", "€50"],
        ["Electrostimulatie (30 min) ", "€50"],
        ["Kruidenbehandeling (30 min) ", "€50"],
      ],
    },
    {
      categorie: "Massage",
      items: [
        ["Ontspanningsmassage", "€60"],
        ["Rug/nek/schouder massage", "€35"],
        ["Voetreflexmassage", "€45"],
      ],
    },
    {
      categorie: "Ontharing",
      items: [
        ["Laser ontharing bovenlip", "€40"],
        ["Laser ontharing oksels", "€60"],
        ["Laser ontharing bikinilijn", "€70"],
        ["Laser ontharing onderbenen", "€100"],
        ["Elektrische epilatie (15 min)", "€35"],
      ],
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-6 text-center text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tarievenlijst Behandelingen
        </motion.h1>

        {behandelingen.map((groep, i) => (
          <motion.div
            key={i}
            className="bg-neutral-800 p-6 rounded-lg shadow-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">
              {groep.categorie}
            </h2>
            <ul className="divide-y divide-gray-700">
              {groep.items.map(([naam, prijs], j) => (
                <li key={j} className="flex justify-between py-2 text-gray-400">
                  <span>{naam}</span>
                  <span>{prijs}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        <div className="text-center mt-8">
          <a
            href="https://the-beauty-clinic-3.salonized.com/widget_bookings/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="bg-neutral-500 hover:bg-gray-400 text-white px-6 py-3 rounded-lg transition duration-300"
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
