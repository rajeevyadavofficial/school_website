import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';

// src/components/SchoolGallery.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const SchoolGallery = () => {
  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-center mb-8">School Gallery</h2>
      <Swiper spaceBetween={0} slidesPerView={3} navigation loop>
        <SwiperSlide>
          <img src={image1} alt="School Event 1" className="w-full h-64 object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="School Event 2" className="w-full h-64 object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="School Event 3" className="w-full h-64 object-cover"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SchoolGallery;
