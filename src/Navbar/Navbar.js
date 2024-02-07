// Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navBar-container">
      <div className="navlogo">
        <p>My Portfolio</p>
      </div>
      <ul>
        <li><NavLink to="/" activeClassName="active" >Home</NavLink></li>
        <li><NavLink to="/Sobre mi" activeClassName="active">Sobre Mi</NavLink></li>
        <li><NavLink to="/Habilidades " activeClassName="active">Habilidades</NavLink></li>
        <li><NavLink to="/Proyectos" activeClassName="active">Proyectos</NavLink></li>
      </ul>
 
    </nav>
  );
}

export default Navbar;
