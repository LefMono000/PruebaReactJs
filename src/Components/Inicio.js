import React from 'react'; 
import image2 from './Colonia1.png';
import '../Archivo_css.css'; 

function AboutUs() {
  return (
    <section className="about-us">
      <div className="content-wrapper">
        <div className="text-section">
          <h2>Colonia Residencial Los Robles, ¿Quiénes somos?</h2>
          <p>
          Bienvenidos a Los Robles, un espacio residencial diseñado para brindar un entorno seguro, acogedor y moderno, donde la tranquilidad y el sentido de comunidad se 
          encuentran en perfecta armonía. Ubicado en un entorno privilegiado, Los Robles se distingue por sus amplias áreas verdes, calles tranquilas y espacios cuidadosamente 
          diseñados para que cada residente encuentre un refugio ideal para descansar y disfrutar.
          </p>
        </div>
        <div className="welcome-section">
        <p>
          En Los Robles, la calidad de vida es nuestra prioridad. Contamos con sistemas de seguridad avanzados, monitoreo 24/7, y un equipo de vigilancia comprometido con el
          bienestar de todos los residentes. Nuestra comunidad también cuenta con áreas de esparcimiento que invitan a disfrutar del aire libre: un parque familiar, zonas recreativas 
          para niños, senderos para caminar, y áreas para mascotas. Todo esto hace que cada paseo o reunión sea una oportunidad para convivir y reforzar el espíritu comunitario que 
          caracteriza a Los Robles.
          </p>
        </div>

        <div className="image-section">
          <img
            src={image2}
            alt="Casa de la comunidad Los Robles"
            className="about-image"
          />
        </div>
        <div className="welcome-section">
        <p>
          Nuestro compromiso es hacer de Los Robles un lugar en el que cada día se viva con tranquilidad, comodidad, y alegría. ¡Bienvenidos a la comunidad, bienvenidos a su hogar!
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;