const BottomNavbar = () => {
  return (
    <nav className="bg-blue-700 text-white py-3 px-4 flex justify-between items-center">
      {/* Navigation Links */}
      <ul className="flex gap-6">
        <li>
          <a href="#" className="hover:underline">
            🏠 होमपेज
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            📂 अभिलेखालय
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            📆 वार्षिक कार्यतालिका
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            📜 मिडिया कानून
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            📧 सम्पर्क
          </a>
        </li>
      </ul>

      {/* Online Payment Button */}
      <button className="bg-white text-blue-700 px-4 py-2 rounded font-bold hover:bg-gray-200 transition">
        🔵 अनलाइन भुक्तानी
      </button>
    </nav>
  );
};

export default BottomNavbar;
