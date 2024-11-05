import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Cabecera from './Components/cabecera';
import Inicio from './Components/Inicio';
import Anuncios from './Components/anuncios';
import Pie_pagina from './Components/Piepagina';
import Pagos from './Pagos';
import Calendario from './Components/Calendario';
import Contactos from './Components/Contactos';

function App() {
  return (
    <Router>
      <div className="access">
        <Cabecera />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/anuncios" element={<Anuncios />} />
            <Route path="/pagos" element={<Pagos />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/contactos" element={<Contactos />} />
          </Routes>
        </main>
        
        <Pie_pagina />
      </div>
    </Router>
  );
}

export default App;