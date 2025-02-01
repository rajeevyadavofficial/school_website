import { FaFacebook, FaInstagram } from 'react-icons/fa';
import developer from '../images/developer.jpg';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center mt-auto">
      <p className="text-lg">
        © 2025 <br />
        Shree Nepal Rastriya Secondary School
        <br /> Parsagadhi Muncipality-9, Baderwa, Parsa <br />
        All rights reserved.
      </p>

      {/* Social media Section */}
      <div className="mt-4 flex items-center justify-center space-x-4">
        <p className="text-md font-semibold">School Social Media Links:</p>
        <a
          href="https://www.facebook.com/profile.php?id=61558443454174"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <FaFacebook size={24} />
        </a>
      </div>

      {/* Developer Section */}
      <div className="mt-4 flex flex-col items-center">
        <div className="flex items-center space-x-2">
          <img
            src={developer}
            alt="Developer"
            className="w-6 h-6 rounded-full"
          />
          <p className="text-md font-semibold">Developed by Er. Rajeev Yadav</p>
        </div>

        {/* Developer Social Media Links */}
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://www.facebook.com/iiam.rajeev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/iiam.rajeev/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
