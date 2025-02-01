const NoticeMarquee = () => {
  return (
    <div className="bg-red-600 text-white py-2 px-4 flex items-center">
      <span className="font-bold">🚨 अपडेटहरू:</span>
      <marquee behavior="scroll" direction="left" className="ml-4">
        २०८१ (कक्षा १०) | वार्षिक कार्यतालिका २०८१/८२ (कक्षा ११/१२) | परीक्षा
        अपडेटहरू...
      </marquee>
    </div>
  );
};

export default NoticeMarquee;
