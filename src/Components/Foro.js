import React from 'react';
import './CSS/Foro.css';

function Foro() {
  return (
    <div className="foro-principal">
      <header className="foro-header">
        <h1>Foro de la Colonia Residencial Los Robles</h1>
        <p>Un espacio para tu voz en la comunidad</p>
      </header>

      <div className="categorias">
        <div className="categoria">
          <h2>Sugerencias y Mejoras</h2>
          <p>Comparte tus ideas para mejorar la comunidad. ¡Toda sugerencia es bienvenida!</p>
          <ul className="temas">
            <li><strong>Propuesta para nuevos juegos en el parque</strong> - Última actividad: Hoy</li>
            <li><strong>Mejora en el alumbrado público</strong> - Última actividad: Hace 2 días</li>
            <li><strong>Iniciativa de reciclaje para el vecindario</strong> - Última actividad: Hace 1 semana</li>
          </ul>
        </div>

        <div className="categoria">
          <h2>Intercambio y Ayuda</h2>
          <p>¿Necesitas ayuda o tienes algo que ofrecer? Este es el lugar para intercambiar y colaborar.</p>
          <ul className="temas">
            <li><strong>Clases de yoga gratuitas en el parque</strong> - Última actividad: Hace 4 horas</li>
            <li><strong>Ofrezco servicio de cuidado de mascotas</strong> - Última actividad: Hace 2 días</li>
            <li><strong>Busco voluntarios para la feria de la comunidad</strong> - Última actividad: Hace 5 días</li>
          </ul>
        </div>
      </div>

      <footer className="foro-footer">
        <p><em>Nota: Esta página es un prototipo visual y no es funcional. Solo representa el diseño del foro.</em></p>
      </footer>
    </div>
  );
}

export default Foro;
