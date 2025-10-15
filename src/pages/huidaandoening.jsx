
import React from "react";
import { motion } from "framer-motion";

export default function Huidaandoening() {
  return (
    <div className="bg-zinc-100 text-black min-h-screen p-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Titel */}
        <motion.h1
          className="text-4xl font-bold mb-8 text-pink-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Huidaandoeningen
        </motion.h1>

        {/* Behandelingen */}
        <div className="bg-white p-8 rounded-2xl shadow-xl mb-10 text-left">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6 text-center">
            Behandelingen
          </h2>

          <ul className="space-y-6 leading-relaxed">
            <li>
              <strong className="text-pink-300">Acne Behandeling:</strong><br />
              Diep reinigende behandeling die ontstekingen vermindert, poriën zuivert en nieuwe uitbraken voorkomt.
            </li>

            <li>
              <strong className="text-pink-300">Pigment Behandeling:</strong><br />
              Egaliseert de teint en vervaagt pigmentvlekken veroorzaakt door zon, hormonen of huidveroudering.
            </li>

            <li>
              <strong className="text-pink-300">Microdermabrasie:</strong><br />
              Zachte, mechanische peeling die dode huidcellen verwijdert en de huid een frisse, gladde uitstraling geeft.
            </li>

            <li>
              <strong className="text-pink-300">Dermapen (Microneedling):</strong><br />
              Stimuleert collageen en elastine voor een stevigere huid. Vermindert littekens, fijne lijntjes en grove poriën.
            </li>

            <li>
              <strong className="text-pink-300">Bio Peeling:</strong><br />
              Natuurlijke kruidenpeeling die celvernieuwing activeert zonder de huid te beschadigen. Zorgt voor een gezonde, egale huid.
            </li>

            <li>
              <strong className="text-pink-300">OxyGeneo:</strong><br />
              Drievoudige werking – exfoliëren, voeden en zuurstof activeren – voor een directe glow en hydratatieboost.
            </li>

            <li>
              <strong className="text-pink-300">Gold Treatment:</strong><br />
              Luxe verzorging met gouddeeltjes die de huid verstevigt, voedt en laat stralen met een jeugdige glans.
            </li>

            <li>
              <strong className="text-pink-300">Anti-Aging Behandeling:</strong><br />
              Hydraterend en verstevigend. Verbetert elasticiteit en vermindert fijne lijntjes voor een jeugdige uitstraling.
            </li>

            <li>
              <strong className="text-pink-300">Facial / Gezichtsbehandeling:</strong><br />
              Op maat gemaakte verzorging afgestemd op jouw huidtype – combineert reiniging, voeding en pure ontspanning.
            </li>
          </ul>
        </div>

        {/* Overige Behandelingen */}
        <div className="bg-white p-8 rounded-2xl shadow-xl text-left">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6 text-center">
            Overige Behandelingen
          </h2>

          <ul className="space-y-6 leading-relaxed">
            <li>
              <strong className="text-pink-300">Coagulatie:</strong><br />
              Effectieve methode om steelwratjes, pigmentvlekjes en gesprongen adertjes veilig te verwijderen.
            </li>

            <li>
              <strong className="text-pink-300">Haarbehandeling:</strong><br />
              Versterkt het haar vanaf de wortel, vermindert haaruitval en stimuleert natuurlijke haargroei.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}