// Em: src/main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx' 
import Home from './pages/homes/Home.jsx' 
import Sobre from './pages/sobres/Sobre.jsx'
import Certificados from './pages/certificts/Certificados.jsx' 

import './index.css'


const router = createBrowserRouter([
  { path: '/', element: <App />, children: [
      { path: '/', element: <Home /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/certificados', element: <Certificados /> }
    ]
  }
])

// 2. O Ponto de Renderização (ESSA PARTE É ESSENCIAL)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)