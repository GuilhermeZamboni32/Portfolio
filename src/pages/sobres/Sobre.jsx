// Em: src/pages/Sobre.jsx

import React from 'react';
import './Sobre.css'; // Importa o CSS

// 1. Importe a mesma foto da home (ou outra, se preferir)
import profileImage from '../../assets/minha-foto-teste.png';

// 2. Importe os ícones de skills (precisa ter 'react-icons' instalado)
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt 
} from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiVite } from 'react-icons/si';

// Lista de skills
const skills = [
  { nome: 'React', icone: <FaReact /> },
  { nome: 'JavaScript', icone: <SiJavascript /> },
  { nome: 'TypeScript', icone: <SiTypescript /> },
  { nome: 'Node.js', icone: <FaNodeJs /> },
  { nome: 'HTML5', icone: <FaHtml5 /> },
  { nome: 'CSS3', icone: <FaCss3Alt /> },
  { nome: 'Vite', icone: <SiVite /> },
  { nome: 'Git', icone: <FaGitAlt /> },
];


function Sobre() {
  return (
    <section className="sobre-page">
      
      {/* --- Seção de Biografia e Educação --- */}
      <div className="sobre-container">
        
        {/* Coluna da Imagem */}
        <div className="sobre-imagem">
          <img src={profileImage} alt="Guilherme Zamboni" />
        </div>

        {/* Coluna do Texto */}
        <div className="sobre-texto">
          <h1>Sobre Mim</h1>
          <p>
            Olá! Sou Guilherme, um desenvolvedor front-end focado em criar
            experiências digitais que sejam ao mesmo tempo funcionais e
            visualmente atraentes. 
          </p>
          <p>
            Atualmente, estou aprofundando meus conhecimentos em Ciência de Dados
            e Inteligência Artificial, buscando unir a criatividade do design de
            interfaces com o poder analítico dos dados.
          </p>

          <h2>Educação</h2>
          <div className="educacao-item">
            {/* Informação do seu Histórico Escolar */}
            <h3>Bacharelado em Ciência de Dados e Inteligência Artificial</h3> [cite: 37]
            <p>Centro Universitário SENAI/SC</p> [cite: 30]
            <p>Período: 2025 (Início) - Cursando</p> [cite: 44, 49, 51]
          </div>
          {/* Você pode adicionar sua Qualificação Técnica aqui também */}
          
        </div>
      </div>

      {/* --- Seção de Skills --- */}
      <div className="skills-container">
        <h2>Minhas Habilidades</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.nome}>
              {skill.icone}
              <span>{skill.nome}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sobre;