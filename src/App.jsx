import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';

// Pages
import Homepage from './pages/homepage';
import Laserontharen from './pages/Laserontharen';
import Acupunctuur from './pages/acupunctuur';
import Tarieven from './pages/tarieven';
import Shop from './pages/shop';
import Contact from './pages/contact';
import OnzeKliniek from './pages/onze-kliniek';
import Huidaandoening from './pages/huidaandoening';

const App = () => {
  return (
    <div className="bg-zinc-100 min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/huidaandoening" element={<Huidaandoening />} />
          <Route path="/laserontharen" element={<Laserontharen />} />
          <Route path="/acupunctuur" element={<Acupunctuur />} />
          <Route path="/tarieven" element={<Tarieven />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/onze-kliniek" element={<OnzeKliniek />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;