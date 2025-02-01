const TopNavbar = () => {
  return (
    <div className="bg-blue-900 text-white text-sm py-2 px-4 flex justify-between items-center">
      <div className="flex gap-4">
        <a href="#" className="hover:underline">
          📅 वार्षिक कार्यतालिका
        </a>
        <a href="#" className="hover:underline">
          📢 अभिलेखालय
        </a>
        <a href="#" className="hover:underline">
          📚 NEB पुस्तकालय
        </a>
        <a href="#" className="hover:underline">
          🌍 पुरानो वेबसाइट
        </a>
      </div>
      <div className="flex items-center gap-4">
        <span>📞 (+977)-01-6630848</span>
        <a href="mailto:info@neb.gov.np" className="hover:underline">
          ✉ info@neb.gov.np
        </a>
        <button className="bg-white text-blue-900 px-2 py-1 rounded">
          EN | ने
        </button>
      </div>
    </div>
  );
};

export default TopNavbar;
