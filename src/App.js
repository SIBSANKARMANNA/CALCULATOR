// App.js
import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="app">
      <Header />
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;