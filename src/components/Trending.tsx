import React from 'react';
import ProductCard from './ProductCard';
import '../assets/styles/Trending.css'; 
import '../assets/styles/ProductCard.css'; 
import lavarropasImg from '../assets/images/lavarropas.png';

const products = [
    { id: 1, name: 'Samsung Smart Tv 75" UHD', price: '$1,100.999', img: lavarropasImg },
    { id: 2, name: 'Samsung Smart Tv 75" UHD', price: '$1,100.999', img: lavarropasImg },
    { id: 3, name: 'Samsung Smart Tv 75" UHD', price: '$1,100.999', img: lavarropasImg },
    { id: 4, name: 'Samsung Smart Tv 75" UHD', price: '$1,100.999', img: lavarropasImg },
    { id: 5, name: 'Samsung Smart Tv 75" UHD', price: '$1,100.999', img: lavarropasImg },
    { id: 6, name: 'Samsung Smart Tv 75" UHD', price: '$1,100.999', img: lavarropasImg },
  ];
  

const Trending: React.FC = () => {
  return (
    <section className="trending-section">
      <h2 className="trending-title">TENDENCIAS</h2>
      <div className="trending-carousel">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            img={product.img}
            title={product.name}
            price={product.price}
            buttonText="Comprar"
          />
        ))}
      </div>
    </section>
  );
};

export default Trending;
