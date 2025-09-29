import React from "react";

const KlachtenReglement = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg my-8">
      <h1 className="text-3xl font-bold mb-6">Klachtenreglement</h1>

      <p className="mb-4">
        Bij Dimamed Beauty streven we ernaar om onze klanten de beste service en behandelingen te bieden. 
        Toch kan het voorkomen dat je niet helemaal tevreden bent. Hieronder lees je hoe je een klacht kunt indienen en hoe wij deze behandelen.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Klacht melden</h2>
      <p className="mb-4">
        Heb je een klacht? Bespreek deze eerst met de medewerker of je contactpersoon in de salon. Vaak kan een gesprek direct tot een oplossing leiden.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Probeer je klacht zo concreet mogelijk te omschrijven.</li>
        <li>Noteer vooraf eventuele belangrijke punten.</li>
        <li>Je mag altijd iemand meenemen ter ondersteuning.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Klachtbehandeling door de manager</h2>
      <p className="mb-4">
        Lukt het niet om de klacht direct op te lossen, dan kun je je klacht richten aan onze manager via:
      </p>
      <ul className="mb-4">
        <li><strong>Email:</strong> info@dimamed.nl</li>
        <li><strong>Telefoon:</strong> 0183-682829</li>
      </ul>
      <p className="mb-4">
        De manager zal je klacht binnen 14 dagen beoordelen en contact met je opnemen om tot een oplossing te komen.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Escalatie</h2>
      <p className="mb-4">
        Als je er samen met ons niet uitkomt, kun je een klacht indienen bij een onafhankelijke instantie voor consumenten in de cosmetische sector. Deze stap is optioneel en alleen bedoeld als laatste mogelijkheid.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Geheimhouding</h2>
      <p className="mb-4">
        Alle klachten worden vertrouwelijk behandeld. Persoonlijke gegevens van jou en medewerkers worden nooit gedeeld zonder toestemming.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Kosten</h2>
      <p className="mb-4">
        Het indienen en behandelen van een klacht bij TheBeautyClinic is volledig kosteloos.
      </p>

      <p className="mt-6">
        Wij hopen uiteraard dat je tevreden bent met onze diensten, maar mocht er iets niet goed verlopen, dan nemen wij je klacht serieus en zorgen wij voor een snelle en professionele afhandeling.
      </p>
    </section>
  );
};

export default KlachtenReglement;