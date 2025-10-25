// Em: src/App.jsx

import { Outlet } from 'react-router-dom';
import './App.css';

// 1. Importe seus novos componentes
import Navbar from './components/nav/Navbar';
import Footer from './components/foot/Footer';

function App() {
  return (
    <>
      {/* 2. Use os componentes */}
      <Navbar />
      
      <main>
        <Outlet /> 
      </main>

      <Footer />
    </>
  )
}

export default App;