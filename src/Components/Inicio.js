import React from 'react';
import image2 from './Colonia1.png'; // Asegúrate de tener la imagen en el directorio adecuado
import '../Archivo_css.css';

function AboutUs() {
  return (
    <section className="about-us">
      <div className="content-wrapper">
        <div className="text-section">
          <h2>Colonia Residencial Los Robles, ¿Quienes somos?</h2>
          <p>
            Does this works?
          </p>
        </div>
        <div className="image-section">
          <img
            src={image2}
            alt="Casa de la comunidad Los Robles"
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;