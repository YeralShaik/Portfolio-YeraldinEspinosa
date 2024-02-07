// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home'
import Navbar from './Navbar/Navbar';
import { Tools } from './Tool/Tools';
import { AboutMe } from './About/About';

import './App.css'
import Proyectos from './Proyectos';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/Sobre Mi" element={<AboutMe />} />
          <Route path="/Habilidades" element={<Tools />} />
          <Route path="/Proyectos" element={<Proyectos />} />
          <Route path="/" element={<Home />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
