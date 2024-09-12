import React from 'react';
import '../assets/styles/ProductCard.css'; 


interface ProductCardProps {
  img: string;
  title: string;
  price: number | string; 
  buttonText: string;
}


const ProductCard: React.FC<ProductCardProps> = ({ img, title, price, buttonText }) => {
  return (
    <div className="product-card">
      <img src={img} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">${price}</p>
      <button className="product-button">{buttonText}</button>
    </div>
  );
};

export default ProductCard;

