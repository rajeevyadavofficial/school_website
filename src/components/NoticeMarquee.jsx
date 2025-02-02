import { FaExclamationCircle } from 'react-icons/fa';

const NoticeMarquee = () => {
  const notices = [
    {
      text: 'सरस्वती माताको कृपाले ज्ञान र बुद्धिको उज्यालो तपाईंको जीवनभरि चम्किरहोस्। सरस्वती पूजाको शुभकामना!',
      link: '#',
    },
    {
      text: 'यो वेबसाइट अझै विकास चरणमा छ। थप सुविधाहरू थप्न बाँकी छन्। कृपया थप सुविधाहरूको लागि प्रतिछा गरीदिनुहोला',
      link: '#',
    },
    { text: '२०८१ (कक्षा १०) | वार्षिक कार्यतालिका', link: '#' },
    { text: '२०८१/८२ (कक्षा ११/१२) | परीक्षा अपडेटहरू...', link: '#' },
  ];

  return (
    <div className="bg-red-600 text-white py-2 px-4 flex items-center">
      <span className="font-bold text-xl flex items-center">
        <FaExclamationCircle className="mr-2" />
        सुचनाहरु:
      </span>
      <marquee behavior="scroll" direction="left" className="ml-4">
        {notices.map((notice, index) => (
          <span key={index} className="mx-4">
            <a href={notice.link} className="underline hover:text-gray-300">
              {notice.text}
            </a>
            {index < notices.length - 1 && ' !!! '}
          </span>
        ))}
      </marquee>
    </div>
  );
};

export default NoticeMarquee;
