import React from 'react';
import './CSS/Anuncios.css';

const AnunciosDatos = [
  { numero: 1, contenido: 'Anuncio #1: Despliegue de plataforma: La comunidad residencial Los Robles ahora cuenta con un sitio web en línea. Se espera terminar la beta inicial para el 20 de noviembre del año 2024' },
  { numero: 2, contenido: 'Anuncio #2: 20 de noviembre, lanzamiento beta del sitio' },
  { numero: 3, contenido: 'Anuncio #3: Ejemplo de noticias más relevantes de la comunidad; cualquier noticia de alta importancia será colocada en uno de estos espacios.' },
];

const AnunciosNegocios = [
  { id: 1, link: 'https://www.ejemplo.com/negocio1', imagen: require('./Imagenes/placeholder1.png'), alt: 'Negocio 1' },
  { id: 2, link: 'https://www.ejemplo.com/negocio2', imagen: require('./Imagenes/placeholder1.png'), alt: 'Negocio 2' },
  { id: 3, link: 'https://www.ejemplo.com/negocio3', imagen: require('./Imagenes/placeholder1.png'), alt: 'Negocio 3' },
];

function Anuncio({ content }) {
  return (
    <div className="anuncio">
      <p>{content}</p>
    </div>
  );
}

function AnuncioImagen({ link, imagen, alt }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="anuncio-imagen">
      <img src={imagen} alt={alt} />
    </a>
  );
}

function Anuncios() {
  return (
    <>
      <section className="seccion-anuncios">
        <h2>Anuncios de la comunidad</h2>
        <div className="anuncios">
          {AnunciosDatos.map((anuncio) => (
            <Anuncio key={anuncio.numero} content={anuncio.contenido} />
          ))}
        </div>
      </section>

      <section className="anuncios-negocios">
        <h2>Anuncios de los residentes</h2>
        <div className="tarjetas-negocios">
          {AnunciosNegocios.map((anuncio) => (
            <AnuncioImagen key={anuncio.id} link={anuncio.link} imagen={anuncio.imagen} alt={anuncio.alt} />
            
            //NOTA: El plan es darle un espacio a los residentes para colocar anuncios de sus negocios y/u eventos
            //en este espacio como una forma de promocionarse. La imagen que usaran para anunciarse llevara al link
            //de sus negocios. En un producto final idealmente los anuncios se alojaran en un servidor backend, para
            //esta prueba y por practicidad el ¨placeholder¨ se incluye dentro del mismo archivo js.

          ))}
        </div>
        <section className="promo">
  <h2>¿Te gustaría promocionar algo?</h2>
  <p>
    Si eres residente y quieres anunciar tu negocio o servicio en nuestra comunidad, ¡nos encantaría ayudarte!
  </p>
  <p>
    Para más información, contáctanos al:
  </p>
  <p><strong>Teléfono:</strong> (55) 1234-5678</p>
  <p><strong>Correo electrónico:</strong> contacto@losrobles.com</p>
  <p>
    No dudes en comunicarte con nosotros para obtener más detalles sobre cómo puedes publicitarte aquí. ¡Esperamos saber de ti!
  </p>
</section>

      </section>
    </>
  );
}

export default Anuncios;


