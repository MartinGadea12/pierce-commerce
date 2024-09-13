import React, { useRef, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../assets/styles/Trending.css";
import "../assets/styles/ProductCard.css";
import arrowIcon from "../assets/icons/Path.svg"; // Importa el ícono

import productImg from "../assets/images/product.jpg";

const products = [
  {
    id: 1,
    brand: 'Samsung',
    details: 'Smart Tv 75" UHD',
    price: "$1,100.999",
    img: productImg,
  },
  {
    id: 2,
    brand: 'Samsung',
    details: 'Smart Tv 75" UHD',
    price: "$1,100.999",
    img: productImg,
  },
  {
    id: 3,
    brand: 'Samsung',
    details: 'Smart Tv 75" UHD',
    price: "$1,100.999",
    img: productImg,
  },
  {
    id: 4,
    brand: 'Samsung',
    details: 'Smart Tv 75" UHD',
    price: "$1,100.999",
    img: productImg,
  },
  {
    id: 5,
    brand: 'Samsung',
    details: 'Smart Tv 75" UHD',
    price: "$1,100.999",
    img: productImg,
  },
  {
    id: 6,
    brand: 'Samsung',
    details: 'Smart Tv 75" UHD',
    price: "$1,100.999",
    img: productImg,
  },
  {
    id: 7,
    brand: 'Samsung',
    details: 'Smart Tv 75" UHD',
    price: "$1,100.999",
    img: productImg,
  },
  {
    id: 8,
    brand: 'Samsung',
    details: 'Smart Tv 75" UHD',
    price: "$1,100.999",
    img: productImg,
  },
];

const Trending: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 768);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  // Función para manejar la navegación de los dots en móvil
  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
    if (carouselRef.current) {
      const offset = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: offset * index,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="trending-section">
      <h2 className="trending-title">TENDENCIAS</h2>

      <div className="card-container">
        {/* Botones de navegación solo en escritorio */}
        {isDesktop && (
          <>
            <button className="carousel-button left" onClick={scrollRight}>
              <img src={arrowIcon} alt="Flecha derecha" className="arrow-icon rotate" />
            </button>
            <button className="carousel-button right" onClick={scrollLeft}>
              <img src={arrowIcon} alt="Flecha izquierda" className="arrow-icon" />
            </button>
          </>
        )}

        {/* Productos (carrusel) */}
        <div className="trending-products" ref={carouselRef} style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              img={product.img}
              brand={product.brand}
              details={product.details}
              price={product.price}
              buttonText="Comprar"
            />
          ))}
        </div>
      </div>

      {/* Nuevos dots de navegación solo en móvil, posicionados debajo de las cards */}
      {!isDesktop && (
        <div className="mobile-carousel-dots">
          {products.map((_, index) => (
            <span
              key={index}
              className={`mobile-dot ${currentImageIndex === index ? 'active' : ''}`}
              onClick={() => goToImage(index)}
            ></span>
          ))}
        </div>
      )}
    </section>
  );
};

export default Trending;
