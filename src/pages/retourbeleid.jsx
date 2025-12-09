import React from "react";

const Retour = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-2xl mt-8 mb-16">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Retourbeleid – The Beauty Clinic
      </h1>

      <div className="text-gray-700 space-y-6">
        <p>
          Bij The Beauty Clinic doen we er alles aan om jouw bestelling met zorg te verpakken en te bezorgen. 
          Ben je toch niet helemaal tevreden met je aankoop? Geen probleem – je kunt jouw bestelling onder bepaalde voorwaarden retourneren.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8">Hoe kan ik een bestelling/product retourneren?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Meld je retour <strong>binnen 14 dagen na ontvangst</strong> van je bestelling aan via{" "}
            <a href="mailto:info@thebeautyclinic.nl" className="text-blue-600 hover:underline">
              info@thebeautyclinic.nl
            </a>. Vermeld hierbij je <strong>ordernummer</strong> en de <strong>reden van retour</strong>.
          </li>
          <li>
            Stuur het product vervolgens <strong>binnen 14 dagen na aanmelding</strong> ongebruikt, onbeschadigd en volledig geseald in de originele verpakking 
            (inclusief eventuele toebehoren) naar:
          </li>
        </ul>

        <address className="bg-gray-50 border border-gray-200 rounded-md p-4 not-italic">
          <strong>The Beauty Clinic</strong>
          <br />
          Bos en Lommerweg 257,
          <br />
          1055 DW Amsterdam
        </address>

        <ul className="list-disc list-inside space-y-2">
          <li>Ruilen of retourneren kan ook bij ons in de salon.</li>
          <li>
            Eventuele <strong>gratis producten of geschenken</strong> die je hebt ontvangen in combinatie met een actie, 
            dienen ook te worden geretourneerd wanneer je de bestelling volledig retourneert.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8">Voorwaarden voor retour</h2>
        <p>Om in aanmerking te komen voor een terugbetaling moet het product:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Ongebruikt, onbeschadigd en ongeopend zijn.</li>
          <li>In de originele, ongeopende verpakking zitten.</li>
          <li>Binnen de wettelijke retourtermijn (14 dagen) worden teruggestuurd.</li>
        </ul>

        <p className="text-sm text-gray-600 italic">
          Let op: geopende cosmetica, hygiëneproducten of gepersonaliseerde artikelen kunnen niet worden geretourneerd vanwege hygiënische redenen.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8">Retourkosten</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            De <strong>verzendkosten voor retourzendingen</strong> zijn voor eigen rekening, tenzij het product defect is geleverd of wij een fout hebben gemaakt.
          </li>
          <li>
            Wij adviseren om je pakket <strong>aangetekend te verzenden</strong>; je bent zelf verantwoordelijk voor de retourzending totdat wij deze in goede orde hebben ontvangen.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8">Terugbetaling</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Zodra wij jouw retourzending hebben ontvangen en gecontroleerd, ontvang je het <strong>aankoopbedrag binnen 14 werkdagen terug</strong> via hetzelfde betaalmiddel waarmee je hebt betaald.
          </li>
          <li>
            Indien je de gehele bestelling retourneert, worden ook de <strong>verzendkosten van de heenzending</strong> terugbetaald.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8">Defect of foutief product ontvangen?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Controleer je bestelling direct na ontvangst.</li>
          <li>
            Ontvang je een defect of verkeerd product? Neem dan <strong>binnen 48 uur</strong> na levering contact met ons op via{" "}
            <a href="mailto:info@thebeautyclinic.nl" className="text-blue-600 hover:underline">
              info@thebeautyclinic.nl
            </a>.
          </li>
          <li>Open of gebruik het product niet, zodat wij het snel en correct kunnen omruilen of vervangen.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8">Annuleren of wijzigen van een bestelling</h2>
        <p>
          Zolang je bestelling nog niet is verzonden, kun je deze <strong>kosteloos annuleren of wijzigen</strong> door direct contact op te nemen met onze klantenservice via{" "}
          <a href="mailto:info@thebeautyclinic.nl" className="text-blue-600 hover:underline">
            info@thebeautyclinic.nl
          </a>. Zodra een bestelling is verzonden, kun je gebruikmaken van het retourproces zoals hierboven beschreven.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8">Duurzaam retourneren</h2>
        <p>
          We begrijpen dat retourneren soms nodig is, maar we willen onnodige retourzendingen graag beperken – goed voor het milieu én voor jou. 
          Twijfel je over een product? Neem dan gerust contact met ons op voor <strong>persoonlijk advies</strong> voordat je bestelt.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8">Contact</h2>
        <p>
          Heb je vragen over je bestelling of retourzending? Neem gerust contact met ons op:
        </p>
        <p>
          📧{" "}
          <a href="mailto:info@thebeautyclinic.nl" className="text-blue-600 hover:underline">
            info@thebeautyclinic.nl
          </a>
          <br />
          📞 06 20801001
        </p>
      </div>
    </section>
  );
};

export default Retour;