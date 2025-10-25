// Em: src/components/Footer.jsx

import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importa os ícones

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        {/* TROQUE '#' PELOS SEUS LINKS REAIS */}
        <a 
          href="https://github.com/seu-usuario" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a 
          href="https://linkedin.com/in/seu-usuario" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      <p>
        &copy; {new Date().getFullYear()} Guilherme Zamboni Menegacio. 
        Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;