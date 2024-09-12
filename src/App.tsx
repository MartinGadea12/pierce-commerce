import Header from './components/Header';
import Banner from './components/Banner';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Banner />
      
        {/* Otros componentes como ProductList, Footer, etc. */}
      </div>
    </>
  );
}

export default App;
