import React from 'react';
import image2 from './Colonia1.png'; // Asegúrate de tener la imagen en el directorio adecuado

function AboutUs() {
  return (
    <section className="about-us">
      <div className="content-wrapper">
        <div className="text-section">
          <h2>Colonia Residencial Los Robles, ¿Quienes somos?</h2>
          <p>
            Aquí puedes inventarte datos sobre la comunidad residencial Los Robles, poner datos geográficos y hablar bien de la comunidad. Podemos inventarlo por ser algo ficticio, es solo para ir rellenando. De preferencia un párrafo o dos de información.
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