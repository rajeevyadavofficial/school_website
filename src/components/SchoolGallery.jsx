import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import cover1 from '../images/cover2.jpg';
import cover2 from '../images/cover1.jpg';
import cover3 from '../images/cover3.jpg';
import cover4 from '../images/cover4.jpg';

const slideImages = [
  {
    url: cover4,
  },
  {
    url: cover1,
  },
  {
    url: cover2,
  },
  {
    url: cover3,
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
