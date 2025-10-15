import React from "react";
import { motion } from "framer-motion";
import acupunctuur2 from "../assets/acupunctuur2.jpg";

export default function Acupunctuur() {
  return (
    <div className="bg-zinc-100 text-black min-h-screen p-4 sm:p-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Titel */}
        <motion.h1 
          className="text-3xl sm:text-4xl font-bold mb-4 text-pink-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ontdek de Kracht van Acupunctuur
        </motion.h1>
        <p className="text-base sm:text-lg text-black mb-6">
          Breng je lichaam en geest in balans en ervaar natuurlijke verlichting van stress, pijn en vermoeidheid.
        </p>

        {/* Voordelen */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-left mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-pink-200 mb-4 text-center">
            Wat kan acupunctuur voor jou doen?
          </h2>
          <ul className="text-black space-y-2 text-sm sm:text-base list-disc list-inside">
            <li>Verlicht pijn: rug, nek, schouders, hoofdpijn</li>
            <li>Vermindert stress, angst en bevordert een goede nachtrust</li>
            <li>Ondersteunt spijsvertering en hormonale balans</li>
            <li>Versterkt immuunsysteem en energie</li>
            <li>Helpt bij allergieën en chronische klachten</li>
          </ul>
        </div>

        {/* Holistische aanpak */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-left mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-200 mb-4 text-center">
            Holistische benadering voor jouw welzijn
          </h2>
          <p className="text-black text-sm sm:text-base mb-4">
            Acupunctuur stimuleert specifieke punten om je lichaam en geest te ondersteunen. Het helpt bij pijn, stress en energieherstel, en bevordert je natuurlijke balans.
          </p>
          <ul className="text-black space-y-2 text-sm sm:text-base list-disc list-inside">
            <li>Pijnverlichting en spierontspanning</li>
            <li>Meer energie en mentale rust</li>
            <li>Verbeterde spijsvertering</li>
            <li>Hormonale balans en vruchtbaarheid</li>
            <li>Gezonde bloedcirculatie en ontgifting</li>
          </ul>
          <img src={acupunctuur2} alt="Acupunctuur behandeling" className="w-full max-w-sm mx-auto mt-5 rounded-lg" />
        </div>

        {/* Tuina massage */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-left mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-200 mb-4 text-center">
            Tuina: Chinese massage voor balans en ontspanning
          </h2>
          <p className="text-black text-sm sm:text-base mb-4">
            Tuina ondersteunt het energieniveau van je lichaam en verlicht spierpijn. Het bevordert ontspanning en helpt je volledig in balans te komen.
          </p>
          <p className="text-black text-sm sm:text-base mb-4">
            Vaak gecombineerd met acupunctuur voor een complete wellness-ervaring.
          </p>
        </div>
      </div>
    </div>
  );
}