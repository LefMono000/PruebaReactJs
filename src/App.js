import React from 'react';
import Cabecera from './Components/cabecera';
import Inicio from './Components/Inicio';
import Anuncios from './Components/anuncios';
import Pie_pagina from './Components/Pie_pagina';

function App() {
  const announcementsData = [
    { number: 1, content: 'Anuncio #1: parrafo corto que anuncie algo importante' },
    { number: 2, content: 'Anuncio #2: otro anuncio relevante para la comunidad' },
    { number: 3, content: 'Anuncio #3: información adicional que la comunidad debe saber' },
  ];

  return (
    <div className="access">
      <Cabecera />
      
      <nav className="nav">
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#pagos">Pagos de la comunidad</a></li>
          <li><a href="#calendario">Calendario de eventos</a></li>
          <li><a href="#contactos">Contactos de emergencia</a></li>
          <li><a href="#foro">Foro residencial</a></li>
        </ul>
      </nav>

      <main className="main-content">
        <Inicio />
        <section className="announcements-section">
          <h2>Anuncios de la comunidad</h2>
          <div className="announcements">
            {announcementsData.map((anuncio) => (
              <Anuncios key={anuncio.number} content={anuncio.content} />
            ))}
          </div>
        </section>
      </main>

      <Pie_pagina />
    </div>
  );
}

export default App;

