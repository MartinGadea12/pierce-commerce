import React, { useRef, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../assets/styles/Carrousel.css";
import "../assets/styles/ProductCard.css";
import arrowIcon from "../assets/icons/Path.svg";

interface CarrouselProps {
  products: {
    id: number;
    brand: string;
    details: string;
    price: string;
    img: string;
  }[];
  title: string;
  buttonText?: string;
  extraClass?: string;  
}

const Carrousel: React.FC<CarrouselProps> = ({ products, title, buttonText = "Comprar", extraClass = "" }) => {
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

  const goToImage = (index: number) => {
    setCurrentImageIndex(index * 2);
    if (carouselRef.current) {
      const cardWidth = 160 * 2;
      carouselRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={`trending-section ${extraClass}`}>
      <h2 className="trending-title">{title}</h2>

      <div className="card-container">
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

        <div className="trending-products" ref={carouselRef}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              img={product.img}
              brand={product.brand}
              details={product.details}
              price={product.price}
              buttonText={buttonText}
            />
          ))}
        </div>
      </div>

      {!isDesktop && (
        <div className="mobile-carousel-dots">
          {Array.from({ length: Math.ceil(products.length / 2) }).map((_, index) => (
            <span
              key={index}
              className={`mobile-dot ${currentImageIndex / 2 === index ? "active" : ""}`}
              onClick={() => goToImage(index)}
            ></span>
          ))}
        </div>
      )}
    </section>
  );
};

export default Carrousel;
