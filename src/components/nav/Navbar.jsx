// Em: src/components/Navbar.jsx

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      
      {/* Seu nome/logo à esquerda */}
      <Link to="/" className="nav-logo">
        Guilherme Zamboni
      </Link>

      {/* Links de navegação à direita */}
      <ul className="nav-menu">
        <li className="nav-item">
          {/* NavLink é especial: ele adiciona uma classe 'active' 
              automaticamente quando o link está ativo */}
          <NavLink to="/" className="nav-link" end>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/sobre" className="nav-link">
            Sobre
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/certificados" className="nav-link">
            Certificados
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink to="/projetos" className="nav-link">
            Projetos
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;