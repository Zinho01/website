import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Laserontharen() {
  const [pricingData, setPricingData] = useState(null);

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
          className="text-4xl font-bold mb-4 text-pink-200"
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
    <h2 className="text-2xl font-semibold text-pink-200 mb-4">
      Laser Ontharing: Efficiënte en Langdurige Oplossing
    </h2>
    <p className="text-black mb-4">
      Ben je het zat om steeds te moeten scheren, waxen of epileren? Met onze geavanceerde 
      diode laser bieden we een veilige en doeltreffende manier om ongewenste haargroei 
      blijvend te verminderen. De laser zendt een geconcentreerde lichtbundel uit die het pigment 
      in de haarwortel verwarmt en vernietigt, waardoor het haar niet meer terugkomt.
    </p>
    <p className="text-black mb-4">
      De behandeling is vrijwel pijnloos, geschikt voor zowel lichte als donkere huidtypes, 
      en kan toegepast worden op vrijwel elk lichaamsgebied. Na enkele sessies geniet je van een 
      zachte, gladde en egale huid – zonder stoppels of ingegroeide haartjes.
    </p>
    <ul className="text-black space-y-2 list-disc ml-6">
      <li>Tijdbesparend en langdurig resultaat</li>
      <li>Geschikt voor zowel mannen als vrouwen</li>
      <li>Geen irritatie of ingegroeide haren</li>
      <li>Veilig en comfortabel dankzij moderne technologie</li>
    </ul>
    <p className="text-black mt-4">
      Wil je weten of laserontharing geschikt is voor jouw huid en haartype? 
      Tijdens een persoonlijk intakegesprek beoordelen we je huid, bespreken we het behandelplan 
      en geven we een eerlijk advies op maat.
    </p>
  </div>

  {/* Elektrische Epilatie */}
  <div className="bg-white p-6 rounded-lg shadow-lg text-left">
    <h2 className="text-2xl font-semibold text-pink-300 mb-4">
      Elektrische Epilatie: Definitieve Verwijdering van Elk Haartje
    </h2>
    <p className="text-black mb-4">
      Elektrische epilatie is de enige methode waarmee werkelijk alle haartypes 
      permanent verwijderd kunnen worden – ongeacht kleur of structuur. Hierbij wordt met 
      een fijn naaldje een zwakke elektrische stroom naar het haarzakje geleid, waardoor 
      het haarworteltje definitief wordt uitgeschakeld.
    </p>
    <p className="text-black mb-4">
      Deze methode is bijzonder geschikt voor kleine zones zoals kin, bovenlip, oksels of bikinilijn, 
      en voor mensen met lichte, grijze of rossige haren die niet reageren op laserontharing. 
      Onze specialisten werken uiterst nauwkeurig en stemmen de stroomsterkte en behandeltijd 
      zorgvuldig af op jouw huidtype.
    </p>
    <ul className="text-black space-y-2 list-disc ml-6">
      <li>Effectief bij alle haarkleuren en huidtypes</li>
      <li>Ideaal voor kleine of gevoelige zones</li>
      <li>Precisiebehandeling: haartje voor haartje</li>
      <li>Definitieve oplossing, ook na laser</li>
    </ul>
    <p className="text-black mt-4">
      Twijfel je tussen laserontharing of elektrische epilatie? 
      Tijdens een vrijblijvende intake kijken we samen naar de beste behandeling 
      voor jouw huid en wensen.
    </p>
  </div>
</div>


        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-4 text-pink-200">Prijslijst</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(pricingData).map(([category, items]) => (
              <motion.div
                key={category}
                className="bg-white p-6 rounded-lg shadow-lg text-left"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-pink-200 border-b border-pink-200 pb-2 mb-3">
                  {category}
                </h3>
                <ul className="text-black space-y-2">
                  {category === "Pakketten" ? (
                    Object.entries(items).map(([pakketNaam, details]) => (
                      <li key={pakketNaam} className="mb-4">
                        <span className="font-bold text-pink-200">{pakketNaam}</span> -{" "}
                        <span className="text-green-600">
                          €{typeof details === "object" && details.Prijs ? details.Prijs : details}
                        </span>
                        <ul className="ml-6 text-sm text-black list-disc mt-1">
                          {typeof details === "object" && details.Inbegrepen && details.Inbegrepen.length > 0 ? (
                            details.Inbegrepen.map((item, index) => (
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
      </div>
    </div>
  );
}