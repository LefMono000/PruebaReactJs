import React from 'react';
import { Link } from 'react-router-dom';
import image from './banner.png'; 

function Cabecera() {
  return (
    <header className="header">
      <div className="top-bar">
        <Link to="/">Registro de residente</Link> / <Link to="#login">Iniciar Sesión</Link>
      </div>
      <div className="header-image">
        <img
          src={image}
          alt="Comunidad feliz mirando al frente"
          className="banner-image"
        />
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/anuncios">Anuncios</Link></li> 
          <li><Link to="/pagos">Pagos</Link></li> 
          <li><Link to="/Calendario">Calendario de eventos</Link></li>
          <li><Link to="/Contactos">Contactos de emergencia</Link></li>
          <li><Link to="#foro">Foro residencial</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Cabecera;


