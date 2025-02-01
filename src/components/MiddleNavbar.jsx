import { useState, useEffect, useMemo } from 'react';
import NepaliDate from 'nepali-date-converter';
import NepalFlag from '../images/nepal_flag.gif';
import SchoolLogo from '../images/schoolLogo.jpg';

const MiddleNavbar = () => {
  const [nepaliDate, setNepaliDate] = useState('');

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

      const nepaliYear = convertToNepaliNumbers(nepDate.getYear());
      const nepaliMonth = nepaliMonths[nepDate.getMonth()];
      const nepaliDay = convertToNepaliNumbers(nepDate.getDate());
      const nepaliWeekDay = nepaliDays[nepDate.getDay()];

      const formattedDate = `${nepaliYear} ${nepaliMonth} ${nepaliDay} गते ${nepaliWeekDay}`;
      setNepaliDate(formattedDate);
    };

    updateDate();

    const now = new Date();
    const timeUntilMidnight = new Date(now.setHours(24, 0, 0, 0)) - now;
    const timer = setTimeout(() => {
      updateDate();
      setInterval(updateDate, 24 * 60 * 60 * 1000);
    }, timeUntilMidnight);

    return () => clearTimeout(timer);
  }, [nepaliMonths, nepaliDays]);

  return (
    <div className="bg-white shadow-md px-4 sm:px-6 py-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
      {/* Logo and School Info */}
      <div className="flex flex-col items-center sm:flex-row sm:items-center sm:gap-4">
        <img
          src={SchoolLogo}
          alt="Logo of श्री नेपाल राष्ट्रिय माध्यमिक विधालय"
          className="w-24 h-24"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black-600">
            श्री नेपाल राष्ट्रिय माध्यमिक विधालय
          </h1>
          <p className="text-sm sm:text-base font-bold text-gray-600">
            पर्सागढी न.पा-९ बडेर्वा,पर्सा
          </p>
        </div>
      </div>

      {/* Nepali Flag and Date */}
      <div className="flex flex-col items-center mt-4 sm:mt-0 sm:flex-row sm:items-center sm:gap-4">
        <img src={NepalFlag} alt="Flag of Nepal" className="w-14 h-14" />
        <p className="text-sm sm:text-base text-gray-700 font-semibold">
          {nepaliDate || 'लोड हुँदैछ...'}
        </p>
      </div>
    </div>
  );
};

export default MiddleNavbar;
