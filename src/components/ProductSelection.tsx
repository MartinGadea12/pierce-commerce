import React, { useEffect, useState } from "react";
import "../assets/styles/ProductSelection.css";
import walletImg from "../../public/images/wallet.png";
import carImg from "../../public/images/car.svg";
import suitCaseImg from "../../public/images/suitcase.svg"

const ProductSelection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="product-container">
      {isMobile && (
        <div className="product-selection">
          <div className="img-contain">
            <img className="img-wallet" src={walletImg} alt="wallet" />
          </div>
          <div className="title-contain">
            <h3 className="title-selection">
              Elegí los productos que vas a comprar
            </h3>
            <p className="parraf-selection">
              Si querés más de uno, sumalos a tu carrito.
            </p>
          </div>
          <div className="carousel-selection">
            <span className="dot-selection"></span>
            <span className="dot-selection"></span>
            <span className="dot-selection"></span>
          </div>
        </div>
      )}

      {!isMobile && (
        <div className="product-selection">
          <div className="product-item">
            <div className="img-container">
              <img className="img-walletweb" src={walletImg} alt="wallet" />
            </div>
            <div className="title-contain">
              <h3 className="title-selection">
                Elegí los productos que vas a comprar
              </h3>
              <p className="parraf-selection">
                Si querés más de uno, sumalos a tu carrito.
              </p>
            </div>
          </div>

          <div className="product-item">
            <div className="img-container">
              <img
                className="img-suitCase"
                src={suitCaseImg}
                alt="Pagá con el medio de pago que quieras"
              />
            </div>
            <div className="title-contain">
              <h3 className="title-selection">
                Pagá con el medio de pago que quieras
              </h3>
              <p className="parraf-selection">
                Comprá con seguridad, usamos la tecnología de Mercado Pago.
              </p>
            </div>
          </div>

          <div className="product-item">
            <div className="img-container">
              <img
                className="img-car"
                src={carImg}
                alt="Recibí el producto que esperás"
              />
            </div>
            <div className="title-contain">
              <h3 className="title-selection">
                Recibí el producto que esperás
              </h3>
              <p className="parraf-selection">
                Elegí la forma de entrega que prefieras y !listo! Aseguramos tu
                entrega con Mercado Envíos.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductSelection;
