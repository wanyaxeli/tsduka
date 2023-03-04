import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Products from './components/Products';
import Links from './components/Links';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Links/>
    </div>
  );
}

export default App;
