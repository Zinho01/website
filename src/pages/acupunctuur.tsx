import React from "react";
import { motion } from "framer-motion";
import acupunctuur from "../assets/acupunctuur1.png";
import acupunctuur2 from "../assets/acupunctuur2.jpg";

const Acupunctuur: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen p-4 sm:p-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          className="text-3xl sm:text-4xl font-bold mb-4 text-gray-200" 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ontdek de Kracht van Acupunctuur
        </motion.h1>
        <p className="text-base sm:text-lg text-gray-400 mb-6">
          Acupunctuur brengt lichaam en geest in balans en biedt natuurlijke verlichting voor uiteenlopende klachten.
        </p>
        <div className="bg-neutral-800 p-4 sm:p-6 rounded-lg shadow-lg text-left">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">Wat kan acupunctuur voor je betekenen?</h2>
          <ul className="text-gray-400 space-y-2 text-sm sm:text-base">
            <li>✔️ Pijnklachten: rugpijn, nek- en schouderpijn, hoofdpijn en spierpijn</li>
            <li>✔️ Stress en emotionele klachten: stress, angst, depressie, slapeloosheid</li>
            <li>✔️ Spijsverteringsproblemen: buikpijn, constipatie, maagklachten</li>
            <li>✔️ Hormonale en vruchtbaarheidsproblemen: PMS, onregelmatige menstruatie, menopauze</li>
            <li>✔️ Allergieën: astma, bronchitis, verkoudheid en griep</li>
            <li>✔️ Chronische aandoeningen: fibromyalgie, CVS, reuma</li>
            <li>✔️ Verslavingen en gedragsproblemen: roken, verslavingen</li>
            <li>✔️ Andere klachten: hoge bloeddruk, bepaalde huidproblemen</li>
          </ul>
        </div>
        <a href="/apointment" className="inline-block mt-6">
          <img src={acupunctuur} alt="foto-acupunctuur" className="w-full max-w-sm mx-auto mb-5 rounded-lg" />
          <motion.button 
            className="bg-neutral-500 hover:bg-gray-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Boek een Gratis Consult
          </motion.button>
        </a>
        <div className="bg-neutral-900 p-4 sm:p-6 rounded-lg shadow-lg text-left mt-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-200 mb-4">
            Acupunctuur: Een Holistische Benadering voor Jouw Gezondheid
          </h2>
          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            Acupunctuur is een eeuwenoude therapie die het lichaam en de geest in balans brengt door het 
            stimuleren van specifieke punten op de huid met dunne naalden. Deze behandeling kan een 
            breed scala aan gezondheidsproblemen aanpakken en is een krachtige manier om zowel 
            fysieke als emotionele klachten te verlichten. Hier zijn enkele van de vele voordelen van 
            acupunctuur:
          </p>
          <ul className="text-gray-400 space-y-2 text-sm sm:text-base">
            <li>✔️ Pijnverlichting en Spierklachten</li>
            <li>✔️ Stress, Angst en Slaapproblemen</li>
            <li>✔️ Verbetering van de Spijsvertering</li>
            <li>✔️ Versterking van het Immuunsysteem</li>
            <li>✔️ Hormonale Balans en Vruchtbaarheid</li>
            <li>✔️ Gezonde Bloedcirculatie en Ontgifting</li>
            <li>✔️ Versterken van Mentale en Fysieke Energie</li>
          </ul>
          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Acupunctuur is dus veel meer dan alleen een manier om pijn te verlichten. Het is een 
            holistische benadering die het hele lichaam en de geest ten goede komt, door de oorzaken van 
            klachten aan te pakken en niet enkel de symptomen te verlichten. Of je nu fysieke pijn hebt, 
            last hebt van emotionele stress of gewoon je algehele welzijn wilt verbeteren, acupunctuur 
            kan een krachtige en effectieve oplossing zijn.
          </p>
          <img src={acupunctuur2} alt="foto-acupunctuur" className="w-full max-w-sm mx-auto mt-5 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Acupunctuur;