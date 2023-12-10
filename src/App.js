// src/App.js
import React from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Content from './Components/DetailedContent/Content';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Content/>
    </div>
  );
}

export default App;
