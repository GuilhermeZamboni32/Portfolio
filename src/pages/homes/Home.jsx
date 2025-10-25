// Em: src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import profileImage1 from '../../assets/minha-foto-1.png';

function Home() {
  return (
    <section className="home-section">
      
      {/* Conteúdo de Texto */}
      <div className="home-content">
        <h1>
          {/* 3. TROQUE [SEU NOME] */}
          Olá, eu sou <span>Guilherem Zamboni Menegacio</span>
        </h1>
        <h2>Desenvolvedor Front-end</h2> {/* Ou seu título */}
        <p>
          Apaixonado por tecnologia e por transformar ideias em interfaces
          intuitivas e dinâmicas com React.
        </p>

        {/* Botões de Ação */}
        <div className="home-cta-buttons">
          <Link to="https://github.com/GuilhermeZamboni32" className="btn btn-primary">
            Ver Projetos
          </Link>
          
          {/* 4. Coloque seu CV na pasta 'public/' */}
          <a 
            href="/seu-curriculo.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary"
          >
            Baixar CV
          </a>
        </div>
      </div>

      {/* Imagem */}
      <div className="home-image">
        {/* 2. Descomente e use a imagem que você importou */}
         <img src={profileImage1} alt="Foto de Guilherme" /> 

     
       
      </div>

    </section>
  );
}

export default Home;