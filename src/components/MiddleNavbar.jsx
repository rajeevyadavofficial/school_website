import { useState, useEffect, useMemo } from 'react';
import NepaliDate from 'nepali-date-converter';
import NepalFlag from '../images/nepal_flag.gif';
import SchoolLogo from '../images/schoolLogo.jpg';

const MiddleNavbar = () => {
  const [nepaliDate, setNepaliDate] = useState('');

  // Nepali month and day names
  const nepaliMonths = useMemo(
    () => [
      'बैशाख',
      'जेठ',
      'असार',
      'श्रावण',
      'भदौ',
      'असोज',
      'कार्तिक',
      'मंसिर',
      'पुष',
      'माघ',
      'फागुन',
      'चैत',
    ],
    []
  );

  const nepaliDays = useMemo(
    () => [
      'आइतबार',
      'सोमबार',
      'मंगलबार',
      'बुधबार',
      'बिहीबार',
      'शुक्रबार',
      'शनिबार',
    ],
    []
  );

  // Function to convert English digits to Nepali digits
  const convertToNepaliNumbers = (num) => {
    const nepaliDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
    return String(num)
      .split('')
      .map((digit) => nepaliDigits[digit])
      .join('');
  };

  useEffect(() => {
    const updateDate = () => {
      const today = new Date();
      const nepDate = new NepaliDate(today);

      // Ensure we are correctly accessing the properties
      const nepaliYear = convertToNepaliNumbers(nepDate.getYear()); // Convert year to Nepali digits
      const nepaliMonth = nepaliMonths[nepDate.getMonth()]; // getMonth() returns 0-based index
      const nepaliDay = convertToNepaliNumbers(nepDate.getDate()); // Convert day to Nepali digits
      const nepaliWeekDay = nepaliDays[nepDate.getDay()]; // Get correct Nepali weekday name

      // Format the date correctly
      const formattedDate = `${nepaliYear} ${nepaliMonth} ${nepaliDay} गते ${nepaliWeekDay}`;
      setNepaliDate(formattedDate);
    };

    updateDate();

    // Auto-update at midnight
    const now = new Date();
    const timeUntilMidnight = new Date(now.setHours(24, 0, 0, 0)) - now;
    const timer = setTimeout(() => {
      updateDate();
      setInterval(updateDate, 24 * 60 * 60 * 1000); // Update every 24 hours
    }, timeUntilMidnight);

    return () => clearTimeout(timer);
  }, [nepaliMonths, nepaliDays]);

  return (
    <div className="bg-white shadow-md h-24 px-6 flex justify-between items-center">
      {/* Logo and Title */}
      <div className="flex items-center gap-4">
        <img
          src={SchoolLogo}
          alt="Logo of श्री नेपाल राष्ट्रिय माध्यमिक विधालय"
          className="w-24 h-24"
        />
        <div>
          <h1 className="text-3xl font-extrabold text-red-600">
            श्री नेपाल राष्ट्रिय माध्यमिक विधालय
          </h1>
          <p className="text-sm text-gray-600">
            पर्सागढी न.पा-९ बडेर्वा, पर्सा
          </p>
        </div>
      </div>

      {/* Nepali Flag & Date */}
      <div className="flex flex-col items-center">
        <img src={NepalFlag} alt="Flag of Nepal" className="w-14 h-14" />
        <p className="text-sm text-gray-700 font-semibold">
          {nepaliDate || 'लोड हुँदैछ...'}
        </p>
      </div>
    </div>
  );
};

export default MiddleNavbar;
