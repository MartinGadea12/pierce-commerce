import React from 'react';
import './App.css'; 
import Header from './components/Header'; 
import Banner from './components/Banner'; 
import Trending from './components/Trending'; 

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <Banner />  
      <Trending /> 
    </div>
  );
}

export default App;
