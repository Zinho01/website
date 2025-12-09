import React from "react";
import { motion } from "framer-motion";

export default function Huidaandoening() {
  return (
    <div className="bg-zinc-100 text-black min-h-screen p-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Titel */}
        <motion.h1
          className="text-4xl font-bold mb-8 text-pink-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Huidaandoeningen
        </motion.h1>

        {/* Acne Behandeling */}
        <div className="bg-white p-8 rounded-2xl shadow-xl mb-10 text-left">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6 text-center">
            Acne Behandeling
          </h2>

          <div className="text-black text-sm sm:text-base space-y-4">
            <p>
              Een huid met acne vraagt om de juiste aanpak. In onze behandelingen werken we
              doelgericht aan het zuiveren, kalmeren en herstellen van de huid. Alles wordt
              afgestemd op wat jouw huid op dat moment nodig heeft.
            </p>
            <p>
              Acne is een veelvoorkomende huidaandoening die ontstaat door een combinatie van
              factoren zoals verstopte poriën, overtollige talgproductie en bacteriën. Het komt
              voor in verschillende vormen en gradaties, en vraagt om een gerichte, persoonlijke
              aanpak. Tijdens onze acnebehandelingen focussen we op het intensief reinigen en
              kalmeren van de huid, het verminderen van onzuiverheden en het verbeteren van de
              algehele huidconditie. Afhankelijk van wat jouw huid nodig heeft, zetten we
              specifieke producten en behandelmethodes in die gericht zijn op het ondersteunen
              van het natuurlijke herstelproces. Onze aanpak is erop gericht om de huid weer in
              balans te brengen en nieuwe uitbraken te helpen voorkomen.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg text-left">
            <h3 className="text-xl font-semibold text-pink-200 mb-3">Pigment & Microdermabrasie</h3>
            <p className="text-black text-sm sm:text-base">
              Pigmentbehandelingen egaliseren de tint en vervagen pigmentvlekken. Microdermabrasie
              verwijdert dode huidcellen voor een frisse, gladde uitstraling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-left">
            <h3 className="text-xl font-semibold text-pink-200 mb-3">Dermapen & Bio Peeling</h3>
            <p className="text-black text-sm sm:text-base">
              Dermapen stimuleert collageen en elastine voor een stevigere huid. Bio Peeling
              activeert celvernieuwing zonder de huid te beschadigen.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-left">
            <h3 className="text-xl font-semibold text-pink-200 mb-3">OxyGeneo & Gold Treatment</h3>
            <p className="text-black text-sm sm:text-base">
              OxyGeneo exfolieert, voedt en activeert zuurstof. Gold Treatment verstevigt, voedt en
              laat de huid stralen met een jeugdige glans.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-left">
            <h3 className="text-xl font-semibold text-pink-200 mb-3">Anti-Aging & Facial</h3>
            <p className="text-black text-sm sm:text-base">
              Hydraterende en verstevigende behandelingen verbeteren elasticiteit en verminderen
              fijne lijntjes. Gezichtsbehandelingen zijn op maat voor jouw huidtype en ontspanning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}