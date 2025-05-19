import React from "react";
import { motion } from "framer-motion";

const Huidaandoening: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen p-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl font-bold mb-4 text-orange-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Huidaandoeningen
        </motion.h1>

        {/* Behandelingen */}
        <div className="bg-neutral-800 p-6 rounded-lg shadow-lg mb-8 text-left">
          <h2 className="text-2xl font-semibold text-orange-200 mb-4 text-center">
            Behandelingen
          </h2>
          <ul className="text-gray-400 space-y-4">
            <li>
              <strong className=" text-orange-200">Acne behandeling:</strong> Intensieve reiniging die ontstekingen vermindert en de huid herstelt. Voorkomt toekomstige uitbraken.
            </li>
            <li>
              <strong className=" text-orange-200">Pigment behandeling:</strong> Vervaagt pigmentvlekken en egaliseert de teint. Geschikt bij zonneschade en melasma.
            </li>
            <li>
              <strong className=" text-orange-200">Micro dermabrasie:</strong> Mechanische peeling die dode huidcellen verwijdert. Verbetert structuur en laat de huid stralen.
            </li>
            <li>
              <strong className=" text-orange-200">Dermapen:</strong> Microneedling stimuleert collageen en elastine. Vermindert littekens, lijntjes en poriën.
            </li>
            <li>
              <strong className=" text-orange-200">Bio Peeling:</strong> Natuurlijke kruidenpeeling zonder huidbeschadiging. Stimuleert celvernieuwing en pakt huidproblemen aan.
            </li>
            <li>
              <strong className=" text-orange-200">OxyGeneo:</strong> Exfolieert, voedt en activeert zuurstof. Geeft direct een glow en hydratatieboost.
            </li>
            <li>
              <strong className=" text-orange-200">Gold treatment:</strong> Luxe behandeling met gouddeeltjes. Verstevigt de huid en geeft een gezonde glow.
            </li>
            <li>
              <strong className=" text-orange-200">Anti-aging:</strong> Gaat huidveroudering tegen en hydrateert intensief. Verbetert elasticiteit en vermindert fijne lijntjes.
            </li>
            <li>
              <strong className=" text-orange-200">Facial / Gezichtsbehandeling:</strong> Op maat gemaakte verzorging voor jouw huidtype. Combineert reiniging, voeding en ontspanning.
            </li>
          </ul>
        </div>

        {/* Coagulatie & Haar behandeling */}
        <div className="bg-neutral-800 p-6 rounded-lg shadow-lg text-left">
          <h2 className="text-2xl font-semibold text-orange-200 mb-4 text-center">
            Overige behandelingen
          </h2>
          <ul className="text-gray-400 space-y-4">
            <li>
              <strong>Coagulatie:</strong> Verwijdert steelwratjes en gesprongen adertjes. Effectief en snel zonder littekens.
            </li>
            <li>
              <strong>Haar behandeling:</strong> Versterkt het haar vanaf de wortel. Stimuleert groei en vermindert haaruitval.
            </li>
          </ul>
        </div>

        <a
          href="https://the-beauty-clinic-3.salonized.com/widget_bookings/new"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6"
        >
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

export default Huidaandoening;