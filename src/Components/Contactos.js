import React from 'react';
import './CSS/Contactos.css';
import Hospital from '../Components/Imagenes/Hospital.jpeg';
import Policia from '../Components/Imagenes/Policia.jpg';
import Bomberos from '../Components/Imagenes/Bomberos.jpeg';

function Contactos() {
  return (
    <div className="directorio-principal">
      <header className="directorio-header">
        <h1>Directorio de Servicios de Emergencia y Apoyo</h1>
        <p>En momentos de necesidad, recuerda que no estás solo. Aquí encontrarás contactos que pueden ayudarte en situaciones de emergencia o asistencia especial.</p>
      </header>

      <div className="contactos-lista">
        <div className="contacto">
          <div className="contacto-imagen">
          <img src={Hospital} alt="Ambulancia o Atención Médica" />
          </div>
          <div className="contacto-info">
            <h2>Ambulancia o Atención Médica</h2>
            <p>Servicio de atención médica en emergencias para la comunidad. Disponible 24/7.</p>
            <p><strong>Teléfono:</strong> 555-123-4567</p>
            <p><strong>Email:</strong> emergencias@salud.com</p>
            <p><strong>Horario:</strong> 24 horas, todos los días</p>
            <div className="contacto-botones">
              <button className="llamar-btn">Llamar</button>
              <button className="compartir-btn">Compartir</button>
            </div>
          </div>
        </div>

        <div className="contacto">
          <div className="contacto-imagen">
          <img src={Policia} alt="Policia municipal" />
          </div>
          <div className="contacto-info">
            <h2>Policía</h2>
            <p>Atención de situaciones de emergencia y seguridad en la comunidad.</p>
            <p><strong>Teléfono:</strong> 555-789-1011</p>
            <p><strong>Email:</strong> seguridad@policia.com</p>
            <p><strong>Horario:</strong> 24 horas, todos los días</p>
            <div className="contacto-botones">
              <button className="llamar-btn">Llamar</button>
              <button className="compartir-btn">Compartir</button>
            </div>
          </div>
        </div>

        <div className="contacto">
          <div className="contacto-imagen">
          <img src={Bomberos} alt="Bomberos" />
          </div>
          <div className="contacto-info">
            <h2>Bomberos</h2>
            <p>Respuesta rápida ante incendios y situaciones de emergencia relacionadas.</p>
            <p><strong>Teléfono:</strong> 555-112-1314</p>
            <p><strong>Email:</strong> emergencias@bomberos.com</p>
            <p><strong>Horario:</strong> 24 horas, todos los días</p>
            <div className="contacto-botones">
              <button className="llamar-btn">Llamar</button>
              <button className="compartir-btn">Compartir</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactos;
