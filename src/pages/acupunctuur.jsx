import React from "react";
import { motion } from "framer-motion";
import acupunctuur2 from "../assets/acupunctuur2.jpg";

export default function Acupunctuur() {
  const voordelen = [
    "Natuurlijke pijnverlichting",
    "Vermindert stress en angstgevoelens",
    "Bevordert een diepere en betere nachtrust",
    "Ondersteunt hormonale balans",
    "Versterkt het immuunsysteem",
    "Verhoogt energie en vitaliteit",
    "Helpt bij hoofdpijn en migraine",
    "Ondersteunt bij spijsverteringsproblemen",
    "Bevordert herstel na blessures of operaties",
    "Verbetert algeheel welzijn en innerlijke balans",
  ];

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

        {/* Uitleg acupunctuur */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-left mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-200 mb-4 text-center">
            Wat is Acupunctuur?
          </h2>
          <div className="text-black text-sm sm:text-base space-y-4">
            <p>
              Acupunctuur is een eeuwenoude behandelmethode waarbij dunne naaldjes op specifieke
              punten in het lichaam worden geplaatst om het natuurlijke evenwicht te stimuleren.
              Deze therapie helpt om de energiestroom (Qi) te herstellen, waardoor het lichaam zichzelf beter kan genezen.
            </p>
            <p>
              Het wordt vaak ingezet bij klachten zoals stress, hoofdpijn, migraine, rug- en nekpijn,
              slaapproblemen, spijsverteringsproblemen en hormonale disbalans.
              Onze ervaren specialisten stemmen elke behandeling zorgvuldig af op jouw persoonlijke situatie en wensen.
            </p>
            <p>
              Wil je weten of acupunctuur iets voor jou is? We bespreken graag de mogelijkheden tijdens een vrijblijvend gesprek.
            </p>
          </div>
          <img
            src={acupunctuur2}
            alt="Acupunctuur behandeling"
            className="w-full max-w-sm mx-auto mt-6 rounded-lg"
          />
        </div>

        {/* Voordelen */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-left mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-pink-200 mb-4 text-center">
            De Belangrijkste Voordelen van Acupunctuur
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-black text-sm sm:text-base list-disc list-inside">
            {voordelen.map((punt, index) => (
              <li key={index}>{punt}</li>
            ))}
          </ul>
        </div>

        {/* Tuina massage */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-left mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-200 mb-4 text-center">
            Tuina Massage
          </h2>
          <div className="text-black text-sm sm:text-base space-y-4">
            <p>
              Tuina massage is een traditionele Chinese therapie die gericht is op het stimuleren van de
              energiestromen (Qi) in het lichaam. Door gerichte technieken zoals druk, kneden en wrijven
              worden blokkades opgeheven en de balans hersteld.
            </p>
            <p>
              Deze behandelmethode ondersteunt het zelfherstellend vermogen van het lichaam en wordt
              vaak ingezet bij klachten zoals spierpijn, spanningsklachten, stress en vermoeidheid.
              Onze therapeuten stemmen de behandeling zorgvuldig af op jouw specifieke situatie en behoeften.
            </p>
            <p>
              Benieuwd of Tuina massage geschikt is voor jou? Wij informeren je graag tijdens een
              persoonlijk consult.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}