import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';

const TopNavbar = () => {
  return (
    <div className="bg-blue-900 text-white text-sm py-2 px-4 flex flex-row justify-between items-center text-center md:text-left">
      {/* Email on the left */}
      <a
        href="mailto:info@neb.gov.np"
        className="hover:underline flex items-center gap-1"
      >
        <MdEmail /> snr.secondaryschool@gmail.com
      </a>

      {/* Telephone on the right */}
      <div className="flex flex-col items-end md:flex-row md:gap-4">
        <span className="flex items-center gap-1">
          <MdPhone /> 9845861550
        </span>
      </div>
    </div>
  );
};

export default TopNavbar;
