import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import { Tools } from './components/Tool/Tools';
import { AboutMe } from './components/About/About';
import Proyectos from './components/Proyectos';
import './App.css';


/**
 * Componente principal que define la estructura de la aplicación y utiliza React Router para gestionar las rutas.
 * Contiene el fondo animado, la barra de navegación y las secciones principales.
 */
const App = () => {
  return (
    <Router>
    
        <Navbar />
        <Routes>
          <Route path="/Sobre Mi" element={<AboutMe />} />
          <Route path="/Habilidades" element={<Tools />} />
          <Route path="/Proyectos" element={<Proyectos />} />
          <Route path="/" element={<Home />} />
        </Routes>
   
    </Router>
  );
};

export default App;
