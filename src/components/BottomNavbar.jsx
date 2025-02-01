import {
  FaHome,
  FaFolder,
  FaCalendarAlt,
  FaFileAlt,
  FaEnvelope,
  FaMoneyBillWave,
  FaBars,
} from 'react-icons/fa';
import { useState } from 'react';

const BottomNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-700 text-white py-3 px-4 flex justify-between items-center">
      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden">
        <button onClick={toggleMobileMenu}>
          <FaBars className="text-white text-2xl" />
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`lg:flex flex-col lg:flex-row gap-6 ${
          isMobileMenuOpen ? 'block' : 'hidden'
        } lg:block`}
      >
        <li>
          <a href="#" className="flex items-center hover:underline">
            <FaHome className="mr-2" />
            होमपेज
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center hover:underline">
            <FaFolder className="mr-2" />
            अभिलेखालय
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center hover:underline">
            <FaCalendarAlt className="mr-2" />
            वार्षिक कार्यतालिका
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center hover:underline">
            <FaFileAlt className="mr-2" />
            मिडिया कानून
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center hover:underline">
            <FaEnvelope className="mr-2" />
            सम्पर्क
          </a>
        </li>
      </ul>

      {/* Online Payment Button */}
      <button className="bg-white text-blue-700 px-4 py-2 rounded font-bold hover:bg-gray-200 transition">
        <FaMoneyBillWave className="inline mr-2" />
        अनलाइन भुक्तानी
      </button>
    </nav>
  );
};

export default BottomNavbar;
