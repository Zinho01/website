import React from 'react';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

import foto1 from '../assets/foto1.png';
import Skincare1 from '../assets/skincare.jpg';
import skincare2 from '../assets/skincare2.jpg';
import banner1 from '../assets/acupunctuur1.png';
import banner2 from '../assets/Laser-ontharen.jpg';
import banner3 from '../assets/huidbehandeling.jpg';
import banner4 from '../assets/waxen.jpg';
import banner5 from '../assets/elektrisch-epilatie.jpg';
import banner6 from '../assets/camouflage therapie.jpg';
import banner7 from '../assets/intake.jpg';
import banner8 from '../assets/touw epileren.jpg';
import banner9 from '../assets/acne.jpg';
import banner10 from '../assets/massage.jpg';
import banner11 from '../assets/detox.jpg';

import logo1 from '../assets/anbos-logo.jpg';
import logo2 from '../assets/KAB.png';
import logo3 from '../assets/Skin-logo.jpg';
import logo4 from '../assets/zhong.jpg';
import logo5 from '../assets/mediotopics.jpg';
import logo6 from '../assets/mesoestetic-logo.png';
import logo7 from '../assets/NeodermaLogo .png';
import logo8 from '../assets/rc_logo_new.png';
import logo9 from '../assets/casmara-black-logo.png';

import ReviewCard from '../components/ReviewCard';

const banners = [
  { image: banner1, title: 'Acupunctuur', description: 'Traditionele Chinese geneeskunde voor een holistische benadering van gezondheid en welzijn.' },
  { image: banner2, title: 'Laserontharen', description: 'Efficiënte en langdurige oplossing voor ongewenste haargroei.' },
  { image: banner3, title: 'Huidbehandelingen', description: 'Verzorgende gezichtsbehandelingen voor een stralende huid.' },
  { image: banner4, title: 'Waxen', description: 'Snelle en effectieve haarverwijdering met wax voor een gladde huid.' },
  { image: banner5, title: 'Elektrische Epilatie', description: 'Permanente haarverwijdering met geavanceerde technologie voor langdurige resultaten.' },
  { image: banner6, title: 'Camouflagetherapie', description: 'Verberg littekens en huidoneffenheden met onze gespecialiseerde camouflagetherapie.' },
  { image: banner7, title: 'Intakegesprek', description: 'Persoonlijke consultaties om jouw specifieke behoeften te begrijpen en een behandelplan op maat te maken.' },
  { image: banner8, title: 'Touw-epileren', description: 'Natuurlijke en effectieve methode voor haarverwijdering met touwtechniek.' },
  { image: banner9, title: 'Acne Behandelingen', description: 'Gerichte behandelingen voor acne en huidproblemen, gericht op het verbeteren van de huidconditie.' },
  { image: banner10, title: 'Massages', description: 'Ontspannende en therapeutische massages voor een betere doorbloeding en ontspanning.' },
  { image: banner11, title: 'Detox', description: 'Reinigingsbehandelingen om het lichaam te ontgiften en de algehele gezondheid te verbeteren.' },
];

const ITEM_WIDTH = 340;

export default function Homepage() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -ITEM_WIDTH : ITEM_WIDTH;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="max-w-md mx-auto">
          <h1 className="text-neutral-900 text-2xl font-bold mb-2">The Beauty Clinic</h1>
          <p className="text-black mb-4">
            Welkom bij The Beauty Clinic – dé plek voor huidverbetering, ontspanning en zelfvertrouwen
          </p>
          <a href="../onze-kliniek" className="text-red-200 hover:underline font-medium">
            Lees meer over ons
          </a>
          <p className="text-black mt-4">
            Onze missie is om jouw natuurlijke schoonheid te versterken.
          </p>
        </div>
        <img src={foto1} alt="woman" className="w-1/3 h-auto" />
      </div>

      <div className="text-white bg-white p-8">
        <p>e</p>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-4 sm:px-8">
        {/* Skincare Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img src={Skincare1} alt="skincare foto" className="w-full sm:w-2/3 h-auto rounded-lg mt-5" />
          <div className="text-black space-y-4 text-center sm:text-left">
            <h1 className="font-bold text-lg sm:text-xl text-neutral-900">Ontdek de kracht van professionele skincare behandelingen</h1>
            <p>Bij The Beauty Clinic staat huidverbetering centraal...</p>
            <p>Of je nu last hebt van acne, een doffe huid of beginnende tekenen van huidveroudering...</p>
            <a href="../contact">
              <button className="bg-pink-200 hover:bg-pink-300 rounded px-4 py-2 text-black font-semibold mt-5">Plan een afspraak</button>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-3/3">
          <div className="text-black w-full sm:w-1/3 text-center sm:text-left">
            <p>Tijdens een intake bekijken we jouw huid grondig...</p>
            <p>Skincare bij The Beauty Clinic betekent investeren in een gezonde, stralende huid...</p>
          </div>
          <img src={skincare2} alt="skincare foto" className="w-full sm:w-2/3 h-auto rounded-lg mt-5 mb-5" />
        </div>
      </div>

      {/* Banners Carousel */}
      <div className="text-orange-200 bg-white p-8 relative">
        <p className="text-black flex items-center justify-center font-bold mb-6">Behandelingen</p>
        <div className="relative w-full max-w-6xl mx-auto px-4">
          <div ref={carouselRef} className="flex gap-4 py-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar" style={{ scrollSnapType: 'x mandatory' }}>
            {banners.map((banner, index) => (
              <div key={index} className="flex-none w-[320px] sm:w-[340px] h-64 bg-zinc-200 rounded-lg shadow-lg overflow-hidden snap-start">
                <img src={banner.image} alt={banner.title} className="w-full h-32 object-cover rounded-t-lg" />
                <div className="p-4">
                  <h2 className="font-semibold text-lg sm:text-xl text-black">{banner.title}</h2>
                  <p className="text-sm text-gray-600 mt-2">{banner.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => handleScroll('left')} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition" aria-label="Scroll left">
            ◀
          </button>
          <button onClick={() => handleScroll('right')} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition" aria-label="Scroll right">
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
          review="Hele fijne kliniek! Personeel is heel vriendelijk, erg behulpzaam en professioneel! Een aanrader!"
          date="3 jaar geleden"
        />
      </div>

{/* FAQ Section */}
<div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 max-w-3xl mx-auto mt-10 mb-10">
  <h2 className="text-2xl sm:text-3xl font-bold text-pink-300 text-center mb-6">
    Veelgestelde Vragen (FAQ)
  </h2>
  <div className="space-y-4">
    {[
      {
        question: "Hoe werkt laserontharing en is het permanent?",
        answer:
          "Laserontharing gebruikt geconcentreerd licht dat de haarzakjes verwarmt en beschadigt. Dit zorgt voor langdurige vermindering van haargroei, maar volledig permanent is het meestal niet. Onderhoudsbehandelingen zijn vaak nodig."
      },
      {
        question: "Wat houdt een huidbehandeling precies in?",
        answer:
          "Onze huidbehandelingen bestaan uit reiniging, exfoliatie, dieptereiniging en verzorging met hoogwaardige producten. Ze verbeteren de huidstructuur en geven een frisse uitstraling."
      },
      {
        question: "Is waxen pijnlijk en hoe lang blijft het resultaat zichtbaar?",
        answer:
          "Waxen kan even gevoelig zijn, vooral bij de eerste keer. Het resultaat blijft gemiddeld 3 tot 6 weken zichtbaar, afhankelijk van je haargroei."
      },
      {
        question: "Kan ik behandelingen combineren tijdens één afspraak?",
        answer:
          "Ja, veel van onze behandelingen kunnen gecombineerd worden. Zo kun je bijvoorbeeld een huidbehandeling combineren met ontharing voor een compleet resultaat."
      },
      {
        question: "Zijn er risico’s of bijwerkingen bij de behandelingen?",
        answer:
          "Onze behandelingen zijn veilig en worden uitgevoerd door professionals. Mogelijke lichte bijwerkingen, zoals roodheid of gevoeligheid, verdwijnen meestal binnen enkele uren tot dagen."
      }
    ].map((faq, index) => (
      <div key={index} className="border-b border-zinc-200 pb-2">
        <button
          onClick={() =>
            setActiveIndex(activeIndex === index ? null : index)
          }
          className="w-full text-left flex justify-between items-center text-neutral-900 font-medium focus:outline-none"
        >
          <span>{faq.question}</span>
          <span className="text-pink-200">
            {activeIndex === index ? "−" : "+"}
          </span>
        </button>
        {activeIndex === index && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="text-sm sm:text-base text-black mt-2"
          >
            {faq.answer}
          </motion.div>
        )}
      </div>
    ))}
  </div>
</div>
<div className="overflow-hidden whitespace-nowrap py-6 bg-white">
  <div className="flex animate-marquee">
    {/* First Loop */}
    <div className="flex shrink-0">
      <img src={logo1} alt="logo1" className="w-12 sm:w-14 md:w-16 lg:w-20 mx-6 sm:mx-8" />
      <img src={logo2} alt="logo2" className="w-12 sm:w-14 md:w-16 lg:w-20 mx-6 sm:mx-8" />
      <img src={logo3} alt="logo3" className="w-12 sm:w-14 md:w-16 lg:w-20 mx-6 sm:mx-8" />
      <img src={logo4} alt="logo4" className="w-12 sm:w-14 md:w-16 lg:w-20 mx-6 sm:mx-8" />
      <img src={logo5} alt="logo5" className="w-14 sm:w-16 md:w-20 lg:w-24 mx-6 sm:mx-8" />
      <img src={logo6} alt="logo6" className="w-14 sm:w-16 md:w-20 lg:w-24 mx-6 sm:mx-8" />
      <img src={logo7} alt="logo7" className="w-14 sm:w-16 md:w-20 lg:w-24 mx-6 sm:mx-8" />
      <img src={logo8} alt="logo8" className="w-14 sm:w-16 md:w-20 lg:w-24 mx-6 sm:mx-8" />
      <img src={logo9} alt="logo9" className="w-14 sm:w-16 md:w-20 lg:w-24 mx-6 sm:mx-8" />
    </div>

    {/* Duplicate for seamless scroll */}
    <div className="flex shrink-0">
      <img src={logo1} alt="logo1" className="w-12 sm:w-14 md:w-16 lg:w-20 mx-6 sm:mx-8" />
      <img src={logo2} alt="logo2" className="w-12 sm:w-14 md:w-16 lg:w-20 mx-6 sm:mx-8" />
      <img src={logo3} alt="logo3" className="w-12 sm:w-14 md:w-16 lg:w-20 mx-6 sm:mx-8" />
      <img src={logo4} alt="logo4" className="w-12 sm:w-14 md:w-16 lg:w-20 mx-6 sm:mx-8" />
      <img src={logo5} alt="logo5" className="w-14 sm:w-16 md:w-20 lg:w-24 mx-6 sm:mx-8" />
      <img src={logo6} alt="logo6" className="w-14 sm:w-16 md:w-20 lg:w-24 mx-6 sm:mx-8" />
      <img src={logo7} alt="logo7" className="w-14 sm:w-16 md:w-20 lg:w-24 mx-6 sm:mx-8" />
      <img src={logo8} alt="logo8" className="w-14 sm:w-16 md:w-20 lg:w-24 mx-6 sm:mx-8" />
      <img src={logo9} alt="logo9" className="w-14 sm:w-16 md:w-20 lg:w-24 mx-6 sm:mx-8" />
    </div>
  </div>
</div>
    </>
  );
}
