import React from "react";
import productsData from "../../src/data/products.json";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Carrousel from "../components/Carrousel";
import Category from "../components/Category";
import ProductSelection from "../components/ProductSelection";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <Banner />
      <Carrousel
        products={productsData}
        title="TENDENCIAS"
        buttonText="Comprar"
      />
      <Category />
      <Carrousel
        products={productsData}
        title="LA MAS VENDIDAS"
        buttonText="Comprar"
        extraClass="custom-background"
      />
      <ProductSelection />
      <Footer />
    </div>
  );
};

export default Home;
