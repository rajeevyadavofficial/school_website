import { FaExclamationCircle } from 'react-icons/fa';

const NoticeMarquee = () => {
  return (
    <div className="bg-red-600 text-white py-2 px-4 flex items-center">
      <span className="font-bold text-xl">
        {/* <FaExclamationCircle className="mr-2" /> */}
        सुचनाहरु:
      </span>
      <marquee behavior="scroll" direction="left" className="ml-4">
       ** यो वेबसाइट अझै विकास चरणमा छ। थप सुविधाहरू थप्न बाँकी छन्। कृपया थप
        सुविधाहरूको लागि प्रतिछा  गरीदिनुहोला । **               २०८१ (कक्षा १०) | वार्षिक कार्यतालिका
        २०८१/८२ (कक्षा ११/१२) | परीक्षा अपडेटहरू...
      </marquee>
    </div>
  );
};

export default NoticeMarquee;
