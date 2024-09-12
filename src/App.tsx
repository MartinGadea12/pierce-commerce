import { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const trendingProducts = [
    { name: 'Samsung Smart TV', price: '$1.100.999', image: '/path-to-image' },
    // más productos
  ];

  return (
    <>
      <Header />
       <Banner />
      {/*<ProductList title="Tendencias" products={trendingProducts} />
      <Footer /> */}
    </>
  );
}

export default App;
