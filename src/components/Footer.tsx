import React, { useState, useEffect } from "react";
import "../assets/styles/Footer.css";

import pierce from "../../public/images/pierce.png";
import location from "../../public/images/Location.png";
import vtex from "../../public/images/vtex.png";
import fiscal from "../../public/images/fiscal.png";

const Footer: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className="footer-container">
      {isDesktop ? (
        <div className="footer-content">
          <div className="footer-left">
            <ul className="footer-links">
              <li>CONDICIONES</li>
              <li>TRABAJA CON NOSOTROS</li>
              <li>MEDIOS DE PAGO</li>
              <li>PREGUNTAS FRECUENTES</li>
              <li>
                <button className="footer-button">BOTÓN DE ARREPENTIMIENTO</button>
              </li>
            </ul>
            <div className="footer-bottom">
              <p>Powered by Pierce commerce</p>
              <img src={pierce} alt="Pierce Logo" />
              <img className="vtex-logo" src={vtex} alt="VTEX Logo" />
            </div>
          </div>

          <div className="footer-center">
            <h2 className="footer-title">Mi Tienda</h2>
          </div>

          <div className="footer-right">
            <div className="footer-sucursal">
              <div className="sucursal-header">
                <img src={location} alt="location" className="sucursal-icon" />
                <p className="sucursal">SUCURSALES</p>
              </div>
              <p>Whatsapp 2215137270</p>
              <p>ecommerce@mateu.com.ar</p>
              <p>La Plata 1900, Buenos Aires, Argentina</p>
            </div>
            <div className="footer-icons">
            <p className="mateusports">© 2023 MateuSports</p>
              <img className="pierce-logo" src={fiscal} alt="Fiscal Logo" />
            </div>
          </div>
        </div>
      ) : (
        <div className="footer-content">
          <h2 className="footer-title">Mi Tienda</h2>
          <ul className="footer-links">
            <li>CONDICIONES</li>
            <li>TRABAJA CON NOSOTROS</li>
            <li>MEDIOS DE PAGO</li>
            <li>PREGUNTAS FRECUENTES</li>
            <li>
              <button className="footer-button">BOTÓN DE ARREPENTIMIENTO</button>
            </li>
          </ul>
          <div className="footer-sucursal">
            <div className="sucursal-header-movil">
              <img src={location} alt="location" className="sucursal-icon" />
              <p className="sucursal">SUCURSALES</p>
            </div>
            <p>Whatsapp 2215137270</p>
            <p>ecommerce@mateu.com.ar</p>
            <p>La Plata 1900, Buenos Aires, Argentina</p>
          </div>

          <div className="footer-bottom">
            <p>Powered by Pierce commerce</p>
            <img src={pierce} alt="Pierce Logo" />
          </div>
          <div className="footer-icons">
            <img className="pierce-logo" src={fiscal} alt="Fiscal Logo" />
            <img className="vtex-logo" src={vtex} alt="VTEX Logo" />
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
