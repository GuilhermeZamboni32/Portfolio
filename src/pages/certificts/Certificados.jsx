import React from 'react';
import './Certificados.css'; 
import certNlwAvancado from '../../assets/cert-nlw-avancado.jpg';
import certNlwIniciante from '../../assets/cert-nlw-iniciante.jpg';
import certNlwPocket from '../../assets/cert-nlw-pocket.jpg';
import certSenaiDataScience from '../../assets/cert-senai-data-science.jpg';
import certSenaiProgramador from '../../assets/cert-senai-programador.jpg';




 const listaCertificados = [
  {
    imagem: certNlwAvancado,
    titulo: 'NLW Agents - Avançado', 
    descricao: 'Aplicação full-stack com Node.js, Fastify, React, Vite, Tailwind, React Query e integração com IA (Gemini).',
    link: 'https://app.rocketseat.com.br/certificates/908334cb-eldd-46fe-8f4a-e4d3daa24aad' 
  },
  {
    imagem: certNlwIniciante,
    titulo: 'NLW Agents - Iniciante', 
    descricao: 'Fundamentos da programação Web, HTML, CSS, JavaScript, lógica de programação, introdução à IA, LLMs, e Gemini.',
    link: 'https://app.rocketseat.com.br/certificates/5c799cda-e3df-46b2-8266-f39e63cdc41b' 
  },
  {
    imagem: certNlwPocket,
    titulo: 'NLW Pocket | Iniciantes - Fullstack', 
    descricao: 'Projeto web full-stack (HTML, CSS, JS) com IA como copiloto. Criação de um app "Prompt Manager".',
    link: 'https://app.rocketseat.com.br/certificates/24af5b68-dfee-4819-a7d1-931091aeledd' 
  },
  {
    imagem: certSenaiProgramador,
    titulo: 'Qualificação: Programador de Sistemas de Informação', 
    descricao: 'Curso Técnico em Desenvolvimento de Sistemas (300h) focado em Lógica de Programação.', 
    link: 'https://ecommerce.sesisenai.org.br/documentos/validar' 
  },
  {
    imagem: certSenaiDataScience,
    titulo: 'Data Science in Industry: Success and Challenges',
    descricao: 'Curso de Extensão Profissional (8h) focado em introdução ao data science, qualidade de dados e estudos de caso.', 
    link: 'https://ecommerce.sesisenai.org.br/documentos/validar' 
  },
];


function Certificados() {
  return (
    <section className="certificados-page">
      <h1>Certificados e Qualificações</h1>
      
      <div className="certificados-grid">
        {listaCertificados.map((cert) => (
          <div className="certificado-card" key={cert.titulo}>
            <img 
              src={cert.imagem} 
              alt={`Imagem do certificado ${cert.titulo}`} 
              className="certificado-imagem"
            />
            <div className="certificado-conteudo">
              <h3>{cert.titulo}</h3>
              <p>{cert.descricao}</p>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="certificado-link"
              >
                Ver Credencial
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificados;