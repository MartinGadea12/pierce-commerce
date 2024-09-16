import React from "react";
import "../assets/styles/ProductCard.css";

interface ProductCardProps {
  img: string;
  brand: string;
  details: string;
  price: number | string;
  buttonText: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  img,
  brand,
  details,
  price,
  buttonText,
}) => {
  return (
    <div>
      <div className="product-card">
        <img src={img} alt={details} className="product-image" />
        <div className="product-title">
          <span className="brand">{brand}</span>
          <br />
          <span className="details">{details}</span>
        </div>
        <p className="product-price">{price}</p>
        <button className="product-button">{buttonText}</button>
      </div>
    </div>
  );
};

export default ProductCard;
