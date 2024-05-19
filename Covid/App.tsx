import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Affected } from './Affetcted';
import { Vaccinated } from './Vaccinated';
// import { Neigh } from './Neigh';

// import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App"> 
      <Affected/>
      <Vaccinated/>
      {/* <Neigh/> */}
    </div>
  );
}

export default App;
