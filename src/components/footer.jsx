import React, { useState } from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

// CookieConsent component
const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(["cookieconsent"]);
  const [visible, setVisible] = useState(!cookies.cookieconsent);

  const giveCookieConsent = () => {
    setCookie("cookieconsent", true, { path: "/", maxAge: 60 * 60 * 24 * 7 });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 w-full bg-gray-800 text-white p-4 flex flex-col md:flex-row justify-between items-center z-50">
      <span className="text-sm mb-2 md:mb-0">
        We use cookies to improve your experience. By using our site, you accept our{" "}
        <a href="/privacy" className="underline text-pink-300">privacy policy</a>.
      </span>
      <button
        onClick={giveCookieConsent}
        className="bg-pink-300 text-white px-4 py-2 rounded hover:bg-pink-400 transition"
      >
        Accept
      </button>
    </div>
  );
};

// Footer component
const Footer = () => {
  return (
    <>
      {/* Wrap CookieConsent in CookiesProvider to avoid errors */}
      <CookiesProvider>
        <CookieConsent />
      </CookiesProvider>

<footer className="bg-zinc-200 text-black py-6 text-sm">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-left">

      {/* Column 1 */}
      <div className="flex flex-col">
        <h2 className="text-base font-semibold text-neutral-900 mb-2">The Beauty Clinic</h2>
        <ul className="flex flex-col gap-1">
          <li><a href="/" className="hover:text-pink-300">Home</a></li>
          <li><a href="/huidaandoening" className="hover:text-pink-300">Huidaandoening</a></li>
          <li><a href="/Laserontharen" className="hover:text-pink-300">Laserontharen</a></li>
          <li><a href="/acupunctuur" className="hover:text-pink-300">Acupunctuur</a></li>
          <li><a href="/tarieven" className="hover:text-pink-300">Tarieven</a></li>
          <li><a href="/onze-kliniek" className="hover:text-pink-300">Onze kliniek</a></li>
          <li><a href="/contact" className="hover:text-pink-300">Contact</a></li>
          <li><a href="/shop" className="hover:text-pink-300">Shop</a></li>
        </ul>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col">
        <h2 className="text-base font-semibold text-neutral-900 mb-2">Contact</h2>
        <ul className="flex flex-col gap-1">
          <li className="flex items-center gap-1">📞 <a href="tel:06 20801001" className="hover:text-pink-300">06 20801001</a></li>
          <li className="flex items-center gap-1">📧 <a href="mailto:info.thebeautyclinic@gmail.com" className="hover:text-pink-300">info@thebeautyclinic.nl</a></li>
          <li className="flex items-center gap-1">📍 Bos en Lommerweg 257, Amsterdam</li>
        </ul>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col">
        <h2 className="text-base font-semibold text-neutral-900 mb-2">Openingstijden</h2>
        <ul className="flex flex-col gap-1">
          <li className="flex justify-between"><span>Maandag:</span> <span >Gesloten</span></li>
          <li className="flex justify-between"><span>Dinsdag:</span> <span >10:00 - 18:00</span></li>
          <li className="flex justify-between"><span>Woensdag:</span> <span >10:00 - 18:00</span></li>
          <li className="flex justify-between"><span>Donderdag:</span> <span >10:00 - 18:00</span></li>
          <li className="flex justify-between"><span>Vrijdag:</span> <span >10:00 - 18:00</span></li>
          <li className="flex justify-between"><span>Zaterdag:</span> <span>10:00 - 18:00</span></li>
          <li className="flex justify-between"><span>Zondag:</span> <span>Gesloten</span></li>
        </ul>
      </div>

      {/* Column 4 */}
<div className="flex flex-col">
  <h2 className="text-base font-semibold text-neutral-900 mb-2">Juridisch</h2>
  <ul className="flex flex-col gap-1">
    <li><Link to="/algemenevoorwaarden" className="hover:text-pink-300">Algemene Voorwaarden</Link></li>
    <li><Link to="/privacy" className="hover:text-pink-300">Privacy Verklaring</Link></li>
    <li><Link to="/klachten" className="hover:text-pink-300">Klachten Reglement</Link></li>
    <li><Link to="/retourbeleid" className="hover:text-pink-300">Retourbeleid</Link></li>
  </ul>
</div>

      {/* Column 5 */}
      <div className="flex flex-col">
        <h3 className="text-base font-semibold text-neutral-900 mb-2">Volg ons op:</h3>
        <div className="flex space-x-4 mb-2">
          <a
            href="https://www.instagram.com/thebeautyclinicamsterdam/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300"
          >
            <FaInstagram size={20} />
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.547570205918!2d4.847961576183594!3d52.37862324668761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e366256123a1%3A0x73bef98d38d17bab!2sThe%20Beauty%20Clinic!5e0!3m2!1snl!2snl!4v1742824306408!5m2!1snl!2snl"
            className="w-full h-40 border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <a
            href="https://www.google.com/maps/place/The+Beauty+Clinic/@52.3786232,4.8479616,17z/data=!3m1!4b1!4m6!3m5!1s0x47c5e366256123a1:0x73bef98d38d17bab!8m2!3d52.37862!4d4.8505365!16s%2Fg%2F11rggp46s1?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 hover:underline mt-2 block"
          >
            Bekijk grotere kaart
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-neutral-900 col-span-full">
        <p>&copy; 2025 The Beauty Clinic. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</footer>
    </>
  );
};

export default Footer;