import bannerImage from '../assets/images/banner.svg';
import '../assets/styles/Banner.css'; // Importa el archivo CSS para el banner

const Banner = () => {
  return (
    <div className="banner-container">
      <img src={bannerImage} alt="Banner promocional" className="banner-image" />
    </div>
  );
};

export default Banner;
