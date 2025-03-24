const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 The Beauty Clinic. All Rights Reserved.</p>
        <ul className="flex justify-center space-x-6 mt-4">
          <li>
            <a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms-of-service" className="hover:text-gray-400">Terms of Service</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-400">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;