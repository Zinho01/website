import { Facebook, Instagram } from "lucide-react"; 

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-6 mt-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          
          <div>
            <h2 className="text-lg font-semibold">Beauty</h2>
            <ul className="mt-2 space-y-2">
              <li><a href="/salon" className="hover:text-gray-400">Salon</a></li>
              <li><a href="/despre" className="hover:text-gray-400">Despre</a></li>
              <li><a href="/preturi" className="hover:text-gray-400">Prețuri</a></li>
              <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Contact</h2>
            <ul className="mt-2 space-y-2">
              <li>📞 <a href="tel:0752232113" className="hover:text-gray-400">06 20801001</a></li>
              <li>📧 <a href="mailto:beauty.salon@gmail.com" className="hover:text-gray-400">info.thebeautyclinic@gmail.com</a></li>
              <li>📍 Bos en Lommerweg 257, Amsterdam, Netherlands</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Openingstijden</h2>
            <ul className="mt-2 space-y-2">
              <li>🕒 Dinsdag - Zaterdag: <span className="font-semibold">10:00 - 19:00</span></li>
              <li>🕒 Maandag - Zondag: <span className="font-semibold">Gesloten</span></li>
            </ul>
          </div>

        </div>

        <div className="mt-6 flex flex-col items-center">
          <h3 className="text-lg font-semibold">Meer content van ons op:</h3>

          <div className="flex space-x-4 mt-4">
            <a href="https://www.instagram.com/thebeautyclinicamsterdam/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-8 h-8 text-white hover:text-gray-400 transition-colors duration-300" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-8 h-8 text-white hover:text-gray-400 transition-colors duration-300" />
            </a>
          </div>

          <div className="w-full flex justify-center mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.547570205918!2d4.847961576183594!3d52.37862324668761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e366256123a1%3A0x73bef98d38d17bab!2sThe%20Beauty%20Clinic!5e0!3m2!1snl!2snl!4v1742824306408!5m2!1snl!2snl"
              className="w-full max-w-md md:max-w-lg h-48 sm:h-56 md:h-64 border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <a 
            href="https://www.google.com/maps/place/The+Beauty+Clinic/@52.3786232,4.8479616,17z/data=!3m1!4b1!4m6!3m5!1s0x47c5e366256123a1:0x73bef98d38d17bab!8m2!3d52.37862!4d4.8505365!16s%2Fg%2F11rggp46s1?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline mt-2"
          >
            View larger map
          </a>
        </div>

        <div className="text-center mt-6">
          <p>&copy; 2025 The Beauty Clinic. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;