import { useState, useEffect } from "react";
import "../assets/styles/Header.css";
import searchIcon from "../assets/icons/search.svg";
import accountIcon from "../assets/icons/account.svg";
import cartIcon from "../assets/icons/market.svg";
import fireIcon from "../assets/icons/fire.svg";
import menuIcon from "../assets/icons/menu.svg";
import closeIcon from "../assets/icons/close.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <div className="header-top">
        <button className="menu-hamburguesa" onClick={toggleMenu}>
          <img src={menuIcon} alt="Menú" />
        </button>

        <div className="tittle">Mi Tienda</div>

        {!isMobile && (
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="search-bar"
            />
            <button className="search-button">
              <img src={searchIcon} alt="Buscar" />
            </button>
          </div>
        )}

        <div className="icons">
          <div className="user-account">
            <img src={accountIcon} alt="Mi cuenta" />
          </div>
          <div className="shopping-cart">
            <img src={cartIcon} alt="Carrito" />
          </div>
        </div>
      </div>

      {isMobile && (
        <div className="search-bar-container-mobile">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="search-bar"
          />
          <button className="search-button">
            <img src={searchIcon} alt="Buscar" />
          </button>
        </div>
      )}

      {menuOpen && <div className="backdrop" onClick={toggleMenu}></div>}
      <div className={`menu-lateral ${menuOpen ? "open" : ""}`}>
        <div className="menu-header">
          <div className="tittle">Mi Tienda</div>
          <button className="close-button" onClick={toggleMenu}>
            <img src={closeIcon} alt="Cerrar" />
          </button>
        </div>
        <nav className="navigation-menu">
          <ul>
            <li>Muebles</li>
            <li>Calzado</li>
            <li>Colchones</li>
            <li>Herramientas</li>
            <li className="offers">
              Ofertas
              <img src={fireIcon} alt="Ofertas" />
            </li>
          </ul>
        </nav>
      </div>

      {!isMobile && (
        <div className="header-bottom">
          <nav className="navigation-menu">
            <p>Muebles</p>
            <p>Calzado</p>
            <p>Colchones</p>
            <p>Herramientas</p>
            <p className="offers">
              Ofertas
              <img src={fireIcon} alt="Ofertas" />
            </p>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
