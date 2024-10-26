import React from 'react';
import image from './banner.png'; // Asegúrate de tener la imagen en el directorio adecuado

function Cabecera() {
  return (
    <header className="header">
      <div className="top-bar">
        <a>Registro de residente</a> / <a href="#login">Iniciar Sesión</a>
      </div>
      <div className="header-image">
        <img
          src={image}
          alt="Comunidad feliz mirando al frente"
          className="banner-image"
        />
      </div>
    </header>
  );
}

export default Cabecera;