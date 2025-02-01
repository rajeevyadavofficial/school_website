import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  {
    url: 'https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/468412814_122162307896280164_2970601532948696907_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=4Xjx7bI5PB0Q7kNvgEn_fmp&_nc_zt=23&_nc_ht=scontent.fktm6-1.fna&_nc_gid=AaWZsrqvOmEHBYvGRJyrZ71&oh=00_AYAU_LwKa18vlbaRyWxEY4dcf1ItVBBFbp3gYjQFM3n6Yg&oe=67A40170',
  },
  {
    url: 'https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/471184779_122167914644280164_2387805654689197648_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=nkQujDOHwL4Q7kNvgEh1QdI&_nc_zt=23&_nc_ht=scontent.fktm6-1.fna&_nc_gid=AuOzbFKV-Hj8Aj91b3vFz_z&oh=00_AYDDR9uSXXUi-pJyU2ZwIz_P3QpksOW_SJVZ536sEOXnbA&oe=67A3D740',
  },
  {
    url: 'https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/471129564_122153237822281448_5213962610532244319_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=14V2dXTLRsUQ7kNvgHcfFVp&_nc_zt=23&_nc_ht=scontent.fktm6-1.fna&_nc_gid=Ac3xLX2mBSfZKtdVA69p52S&oh=00_AYBlWv532TgPwKTREDdg2KnGURBT1ICLWot3MKOTnKrFMQ&oe=67A3E45E',
  },
];

const SchoolGallery = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index} className="each-slide">
            <div
              className="bg-cover bg-center h-100"
              style={{ backgroundImage: `url(${slideImage.url})` }}
            >

            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SchoolGallery;
