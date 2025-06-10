import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-zinc-200 text-black py-4 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
          
          <div>
            <h2 className="text-base font-semibold text-neutral-900">The Beauty Clinic</h2>
            <ul className="mt-1 space-y-1">
              <li><a href="/" className="hover:text-grey-300">home</a></li>
              <li><a href="/huidaandoening" className="hover:text-grey-300">Huidaandoening</a></li>
              <li><a href="/Laserontharen" className="hover:text-grey-300">Laserontharen</a></li>
              <li><a href="/acupunctuur" className="hover:text-grey-300">acupunctuur</a></li>
              <li><a href="/tarieven" className="hover:text-grey-300">tarieven</a></li>
              <li><a href="/onze-kliniek" className="hover:text-grey-300">onze kliniek</a></li>
              <li><a href="/contact" className="hover:text-grey-300">contact</a></li>
              <li><a href="/shop" className="hover:text-grey-300">shop</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-neutral-900">Contact</h2>
            <ul className="mt-1 space-y-1">
              <li>📞 <a href="tel:06 20801001" className="hover:text-pink-300">06 20801001</a></li>
              <li>📧 <a href="mailto:info.thebeautyclinic@gmail.com" className="hover:text-pink-300">info.thebeautyclinic@gmail.com</a></li>
              <li>📍 Bos en Lommerweg 257, Amsterdam</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-neutral-900">Openingstijden</h2>
            <ul className="mt-1 space-y-1">
              <li>🕒 Dinsdag - Zaterdag: <span className="font-semibold">10:00 - 18:00</span></li>
              <li>🕒 Maandag - Zondag: <span className="font-semibold">Gesloten</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center">
          <h3 className="text-base font-semibold text-neutral-900">Volg ons op:</h3>

          <div className="flex space-x-4 mt-3">
            <a
              href="https://www.instagram.com/thebeautyclinicamsterdam/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-300"
            >
              <FaFacebookF size={20} />
            </a>
          </div>

          <div className="w-full flex justify-center mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.547570205918!2d4.847961576183594!3d52.37862324668761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e366256123a1%3A0x73bef98d38d17bab!2sThe%20Beauty%20Clinic!5e0!3m2!1snl!2snl!4v1742824306408!5m2!1snl!2snl"
              className="w-full max-w-md md:max-w-lg h-40 border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <a 
            href="https://www.google.com/maps/place/The+Beauty+Clinic/@52.3786232,4.8479616,17z/data=!3m1!4b1!4m6!3m5!1s0x47c5e366256123a1:0x73bef98d38d17bab!8m2!3d52.37862!4d4.8505365!16s%2Fg%2F11rggp46s1?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 hover:underline mt-2"
          >
            Bekijk grotere kaart
          </a>
        </div>

        <div className="text-center mt-6 text-neutral-900">
          <p>&copy; 2025 The Beauty Clinic. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;