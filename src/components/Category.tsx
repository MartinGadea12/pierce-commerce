import React, { useState, useEffect } from "react";
import "../assets/styles/Category.css";
import shoesCategory from "../../public/images/productCategory.svg";
import ballCategory from "../../public/images/ballCategory.svg";
import  leggingsCategory from "../../public/images/leggingsCategory.svg";
import footCategory from "../../public/images/footCategory.svg";

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 768);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return isDesktop;
};

const Category: React.FC = () => {
  const isDesktop = useIsDesktop();

  const categories = [
    { name: "Zapatillas", imgSrc: shoesCategory, alt: "Zapatillas", className: "zapatillas" },
    { name: "Fútbol", imgSrc: footCategory, alt: "Fútbol", className: "futbol" },
    { name: "Calzas", imgSrc: leggingsCategory, alt: "Calzas", className: "calzas" },
    { name: "Pelotas", imgSrc: ballCategory, alt: "Pelotas", className: "pelotas" },
  ];

  return (
    <div className="container">
      <div className="title-container">
        <h2 className="title">Visitá las categorías más populares</h2>
      </div>

      {isDesktop ? (
        <div className="web-grid">
          {categories.map((category, index) => (
            <div className={`category-item ${category.className}`} key={index}>
              <div className="overlay-text">{category.name}</div>
              {category.imgSrc ? (
                <img className="image" src={category.imgSrc} alt={category.alt} />
              ) : (
                <div className="placeholder">
                  <p>{category.name}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="image-container">
            <div className="overlay-text">Zapatillas</div>
            <img className="image" src={shoesCategory} alt="Zapatillas" />
          </div>
          <div className="pagination">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </>
      )}
    </div>
  );
};

export default Category;
