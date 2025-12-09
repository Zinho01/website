import React from "react";

const Privacy = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-8 mb-16">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Privacyverklaring
      </h1>

      <p className="text-gray-700 mb-4">
        Vanaf 25 mei 2018 is de Wet bescherming persoonsgegevens (Wbp) vervangen door de Algemene Verordening Gegevensbescherming (AVG). Deze Europese regelgeving heeft als doel de verwerking van persoonsgegevens beter te beschermen.
      </p>

      <p className="text-gray-700 mb-4">
        Persoonsgegevens zijn alle gegevens die herleidbaar zijn tot een persoon, zoals naam, geboortedatum of geslacht. Bijzondere persoonsgegevens zijn gegevens van gevoelige aard, zoals medische gegevens, religie, etnische afkomst of seksuele geaardheid. Deze mogen alleen worden verwerkt met expliciete toestemming of in uitzonderingsgevallen.
      </p>

      <p className="text-gray-700 mb-4">
        Omdat The Beauty Clinic medische gegevens verwerkt, vinden wij het belangrijk zorgvuldig om te gaan met uw privacy en gegevensbeveiliging.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">Welke gegevens wij verwerken</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Voor- en achternaam</li>
        <li>Adresgegevens</li>
        <li>Telefoonnummer</li>
        <li>E-mailadres</li>
        <li>BSN en zorgverzekeringsgegevens (indien van toepassing)</li>
        <li>Medische gegevens</li>
        <li>IP-adres bij websitebezoek</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">Doeleinden van de gegevensverwerking</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li><strong>Zorgverlening:</strong> Aanmaken en bijhouden van een medisch dossier conform WGBO.</li>
        <li><strong>Financiële afhandeling:</strong> Facturatie en declaratie bij de zorgverzekeraar.</li>
        <li><strong>Kwaliteitscontrole en overleg:</strong> Voor interne kwaliteitsverbetering en collegiaal overleg.</li>
      </ul>
      <p className="text-gray-700 mb-4">
        Voor andere doeleinden vragen wij altijd eerst uw expliciete toestemming, welke u te allen tijde kunt intrekken.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">Uitwisseling van gegevens</h2>
      <p className="text-gray-700 mb-4">
        Medische gegevens kunnen worden opgevraagd bij of gedeeld met uw huisarts of medisch specialist indien nodig voor uw behandeling. Voor andere uitwisselingen is altijd uw schriftelijke toestemming vereist.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">Geheimhouding</h2>
      <p className="text-gray-700 mb-4">
        Alle medewerkers van The Beauty Clinic zijn gebonden aan het medisch beroepsgeheim. Uw gegevens worden nooit gedeeld zonder uw toestemming, tenzij noodzakelijk voor uw behandeling.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">Beveiliging van persoonsgegevens</h2>
      <p className="text-gray-700 mb-4">
        Wij nemen passende maatregelen zoals versleuteling, toegangsbeheer en training van medewerkers om uw gegevens te beschermen. Bij een datalek wordt dit gemeld bij de Autoriteit Persoonsgegevens en, indien nodig, aan u.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">Bewaartermijn</h2>
      <p className="text-gray-700 mb-4">
        Medische gegevens worden 15 jaar na de laatste behandeling bewaard, tenzij u verzoekt om langere bewaring.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">Uw rechten</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Recht op inzage</li>
        <li>Recht op correctie</li>
        <li>Recht op verwijdering</li>
        <li>Recht op overdraagbaarheid</li>
        <li>Recht op beperking van verwerking</li>
        <li>Recht op bezwaar</li>
        <li>Geen automatische besluitvorming</li>
      </ul>
      <p className="text-gray-700 mb-4">
        Verzoeken kunt u indienen via de contactgegevens hieronder. Wij reageren binnen één maand.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">Kosten</h2>
      <p className="text-gray-700 mb-4">
        Er zijn in principe geen kosten verbonden aan het indienen van een verzoek, behalve bij kennelijk ongegrond of buitensporig verzoek.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">Contactgegevens</h2>
      <p className="text-gray-700 mb-2">
        <strong>The Beauty Clinic</strong><br />
        Bos en Lommerweg 257, 1055 DW Amsterdam<br />
        Telefoon: 06 20801001<br />
        E-mail: info@thebeautyclinic.nl
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">Klachten</h2>
      <p className="text-gray-700 mb-4">
        Als u niet tevreden bent over onze verwerking van persoonsgegevens, neem eerst contact met ons op. Lukt het niet samen op te lossen, dan kunt u een klacht indienen bij de Autoriteit Persoonsgegevens.
      </p>
    </section>
  );
};

export default Privacy;