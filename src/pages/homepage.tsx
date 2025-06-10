import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import foto1 from '../assets/foto1.png';
import Skincare1 from '../assets/skincare.jpg';
import skincare2 from '../assets/skincare2.jpg';
import banner1 from '../assets/acupunctuur1.png';
import banner2 from '../assets/Laser-ontharen.jpg';
import banner3 from '../assets/huidbehandeling.jpg';
import banner4 from '../assets/waxen.jpg';

import ReviewCard from '../components/ReviewCard';

const banners = [
  {
    image: banner1,
    title: 'Acupunctuur',
    description: 'Acupunctuur brengt lichaam en geest in balans en biedt natuurlijke verlichting voor uiteenlopende klachten.',
  },
  {
    image: banner2,
    title: 'Laserontharen',
    description: 'Ontdek de voordelen van professionele laserontharing en geniet van een gladde huid zonder ongewenste haargroei.',
  },
  {
    image: banner3,
    title: 'Huidbehandelingen',
    description: ' voedt de huid en pakt onzuiverheden of huidveroudering aan. Je huid voelt daarna fris, gezond en stralend aan.',
  },
  {
    image: banner4,
    title: 'Harsen/Waxen',
    description: 'Harsen verwijdert haar met de wortel, voor een gladde huid en een langdurig resultaat.',
  },
];

const Homepage = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="max-w-md">
          <h1 className="text-neutral-900 text-2xl font-bold mb-2">The Beauty Clinic</h1>
          <p className="text-black mb-4">
            Welkom bij The Beauty Clinic – dé plek voor huidverbetering, ontspanning en zelfvertrouwen. Wij bieden hoogwaardige behandelingen zoals gezichtsverzorging, huidverjonging en permanente make-up, uitgevoerd door ervaren specialisten.
          </p>
          <a href="../onze-kliniek" className="text-neutral-900 hover:underline font-medium">
            Lees meer over ons
          </a>
          <p className="text-black mt-4">
            Onze missie is om jouw natuurlijke schoonheid te versterken met persoonlijke aandacht en de nieuwste technologieën. Kies voor professionaliteit, kwaliteit en een warme sfeer – kies voor The Beauty Clinic.
          </p>
        </div>
        <img src={foto1} alt="foto-1" className="w-1/3 h-auto" />
      </div>

      <div className="text-neutral-50 bg-neutral-50 p-8">
        <p>e</p>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img src={Skincare1} alt="test-foto" className="w-full sm:w-2/3 h-auto rounded-lg mt-5" />
          <div className="text-black space-y-4 text-center sm:text-left">
            <h1 className="font-bold text-lg sm:text-xl text-neutral-900">Ontdek de kracht van professionele skincare behandelingen</h1>
            <p>
              Bij The Beauty Clinic staat huidverbetering centraal. Onze skincare behandelingen zijn gericht op het herstellen, voeden en verjongen van de huid — volledig afgestemd op jouw huidtype en wensen.
            </p>
            <p>
              Of je nu last hebt van acne, een doffe huid of beginnende tekenen van huidveroudering, wij bieden op maat gemaakte oplossingen met resultaatgerichte producten en technieken.
            </p>
            <a href="../contact">
              <button className="bg-pink-200 hover:bg-pink-300 rounded px-4 py-2 text-black font-semibold mt-5">Plan een afspraak</button>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-3/3">
          <div className="text-black w-full sm:w-1/3 text-center sm:text-left">
            <p>
              Tijdens een intake bekijken we jouw huid grondig en stellen we een persoonlijk behandelplan op. Denk aan reiniging, exfoliatie, hydratatie en het stimuleren van collageenproductie.
            </p>
            <p>
              Skincare bij The Beauty Clinic betekent investeren in een gezonde, stralende huid – met professionele begeleiding en voelbaar resultaat na elke behandeling.
            </p>
          </div>
          <img src={skincare2} alt="test-foto" className="w-full sm:w-2/3 h-auto rounded-lg mt-5 mb-5" />
        </div>
      </div>

      <div className="text-orange-200 bg-white p-8">
        <p className="text-black flex items-center justify-center font-bold mb-6">Behandelingen</p>
        <div className="relative w-full max-w-4xl mx-auto px-4">
          <div ref={carouselRef} className="flex gap-4 sm:gap-6 py-4 overflow-x-hidden" style={{ scrollBehavior: 'smooth' }}>
            {banners.map((banner, index) => (
              <div key={index} className="flex-none w-64 sm:w-80 h-64 bg-zinc-200 rounded-lg shadow-lg overflow-hidden">
                <img src={banner.image} alt={`Banner ${index + 1}`} className="w-full h-32 object-cover rounded-t-lg" />
                <div className="p-4">
                  <h2 className="font-semibold text-lg sm:text-xl text-black">{banner.title}</h2>
                  <p className="text-sm text-gray-600 mt-2">{banner.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => handleScroll('left')}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
          >
            ◀
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
          >
            ▶
          </button>
        </div>
      </div>

      <p className="text-white flex justify-center font-bold text-xl mt-12">Reviews</p>
      <div className="flex flex-wrap justify-center gap-6 p-8 bg-zinc-200">
        <ReviewCard
          name="Sarah"
          rating={5}
          review="Zorgzame en vriendelijke hulp! Je hebt een eindresultaat bereikt. Goed advies en kennis is super! Top!"
          date="een jaar geleden"
        />
        <ReviewCard
          name="Serhat Pehlivan"
          rating={5}
          review="Ik ben op de plaatsen in Zaandam geweest, de plaatsen in Amsterdam zijn ook erg schoon en mooi. Medewerkers hebben altijd willen doen wat het beste voor mij is, tegen de meest betaalbare prijs. Ik ben dankbaar."
          date="2 jaar geleden"
        />
        <ReviewCard
        name="Melike Al-Zeh Şahin"
          rating={5}
          review=""
          date="een jaar geleden" />
      </div>

<div className="bg-white text-black min-h-screen p-6 relative overflow-hidden">
  {/* Foreground Content */}
  <div className="relative z-10 max-w-4xl mx-auto text-center">
    <motion.h1
      className="text-4xl font-bold mb-4 text-neutral-900"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Laserontharing
    </motion.h1>
    <p className="text-lg text-neutral-900 mb-6">
      Ontdek de voordelen van professionele laserontharing en geniet van een gladde huid zonder ongewenste haargroei.
    </p>
    <div className="bg-zinc-200 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Gratis Huidanalyse</h2>
      <p className="text-neutral-800 text-left">
        Voor we starten met de laserbehandeling, bieden we een gratis huidanalyse aan om jouw huidtype en behoeften nauwkeurig in kaart te brengen. Tijdens dit consult krijg je persoonlijk advies en beantwoorden we al je vragen. Zo zorgen we voor een veilige en effectieve behandeling die perfect bij jou past.
      </p>
      <a
        href="https://the-beauty-clinic-3.salonized.com/widget_bookings/new"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6"
      >
        <motion.button
          className="bg-pink-200 hover:bg-pink-300 text-black px-6 py-3 rounded-lg transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Boek een Gratis Consult
        </motion.button>
      </a>
    </div>
  </div>
</div>

      <div className="text-zinc-200 bg-zinc-200 p-8">
        <p>e</p>
      </div>
    </>
  );
};

export default Homepage;
