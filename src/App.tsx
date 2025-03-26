import { useState, useEffect } from 'react';
import Footer from './components/footer';
import Navbar from './components/navbar';
import foto1 from './assets/foto1.png';
import Skincare1 from './assets/skincare.jpg';
import skincare2 from './assets/skincare2.jpg';

import banner1 from './assets/skincare.jpg';
import banner2 from './assets/skincare2.jpg';
import banner3 from './assets/skincare.jpg';

const banners = [banner1, banner2, banner3];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  return (
    <div className='bg-black'>
      <Navbar />
      <main>
        <div className="flex items-center justify-between">
          <div className="max-w-md">
            <h1 className="text-orange-200 text-2xl font-bold mb-2">The Beauty Clinic</h1>
            <p className="text-white mb-4">Tekst over de beauty clinic. Hier kun je informatie vinden over onze behandelingen en diensten.</p>
            <a href="#over-ons" className="text-orange-200 hover:underline font-medium">Lees meer over ons</a>
            <p className="text-white mt-4">Hier nog wat extra tekst over de beauty clinic, onze missie en waarom wij de beste keuze zijn.</p>
          </div>
          <img src={foto1} alt="foto-1" className="w-1/3 h-auto" />
        </div>

        <div className='text-orange-200 bg-orange-200 p-8'>
          <p>e</p>
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen gap-6">
          <div className="flex items-center gap-6">
            <img src={Skincare1} alt="test-foto" className="w-2/3 h-auto rounded-lg mt-5" />
            <div className="text-white space-y-4">
              <h1 className="font-bold text-xl">Tekst over hoe en wat alles werkt met een skincare behandeling</h1>
              <p>Extra tekst</p>
              <p>Extra tekst</p>
              <button className="bg-orange-200 rounded px-4 py-2 text-black font-semibold">Plan een afspraak</button>
            </div>
          </div>

          <div className="flex items-center gap-6 ml-10 w-3/3">
            <div className="text-white w-1/3">
              <p>Extra informatie over de behandeling en hoe het werkt.</p>
              <p>Meer details en voordelen van skincare.</p>
            </div>
            <img src={skincare2} alt="test-foto" className="w-2/3 h-auto rounded-lg mt-5 mb-5" />
          </div>
        </div>

        {/* ✅ Fixed Carousel */}
        <div className='text-orange-200 bg-orange-200 p-8'>
          <p className='text-black flex items-center justify-center font-bold mb-6'>behandelingen</p>
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg relative h-64">
              {banners.map((banner, index) => (
                <img
                  key={index}
                  src={banner}
                  alt={`Banner ${index + 1}`}
                  className={`absolute w-full h-64 object-cover transition-opacity duration-1000 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
            >
              ◀
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
            >
              ▶
            </button>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default App;