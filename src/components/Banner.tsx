import { useState } from 'react';
import bannerImage from '../../public/images/banner.svg';
import '../assets/styles/Banner.css';

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [bannerImage, bannerImage, bannerImage, bannerImage];

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="banner-container">
      <div className="banner-slide-container" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Banner promocional ${index}`}
            className="banner-image"
          />
        ))}
      </div>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentImageIndex === index ? 'active' : ''}`}
            onClick={() => goToImage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
