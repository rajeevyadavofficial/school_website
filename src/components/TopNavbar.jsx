import React from 'react';

const TopNavbar = () => {
  return (
    <div className="bg-blue-900 text-white text-sm py-2 px-4 flex flex-row justify-between items-center text-center md:text-left">
      {/* Email on the left */}
      <a href="mailto:info@neb.gov.np" className="hover:underline">
        ✉ info@snrs.shool.gov.np
      </a>

      {/* Telephone on the right */}
      <div className="flex flex-col items-end md:flex-row md:gap-4">
        <span>📞 (+977)-9845861550</span>
      </div>
    </div>
  );
};

export default TopNavbar;
