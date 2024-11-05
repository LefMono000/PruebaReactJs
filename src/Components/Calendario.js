import React, { useState } from 'react';
import './CSS/Calendario.css';

const eventos = [
  { fecha: '2024-11-20', nombre: 'Prueba de la primera versión beta del sitio web' },

  //NOTA: Idealmente, las fechas se agregaran o eliminaran desde un servidor backend, sin embargo
  //y para fines practicos, colocaremos la funcion indicada para la adicion de eventos dentro de este
  //documento.
];

const obtenerEventosDelMes = (anio, mes) => {
  const diasEnMes = new Date(anio, mes, 0).getDate();
  const dias = Array.from({ length: diasEnMes }, (_, index) => index + 1);
  return dias;
};

const obtenerEvento = (fecha) => {
  return eventos.find(evento => evento.fecha === fecha);
};

const agregarEvento = (fecha, nombre) => {
  eventos.push({ fecha, nombre });
};

const eliminarEvento = (fecha) => {
  const index = eventos.findIndex(evento => evento.fecha === fecha);
  if (index !== -1) {
    eventos.splice(index, 1);
  }
};

const Calendario = () => {
  const [anio, setAnio] = useState(2024);
  const [mes, setMes] = useState(11);
  const [mostrarVentana, setMostrarVentana] = useState(false);
  const [detallesVentana, setDetallesVentana] = useState('');

  const dias = obtenerEventosDelMes(anio, mes);

  const manejarCambioMes = (incremento) => {
    if (mes + incremento > 12) {
      setMes(1);
      setAnio(anio + 1);
    } else if (mes + incremento < 1) {
      setMes(12);
      setAnio(anio - 1);
    } else {
      setMes(mes + incremento);
    }
  };

  const abrirVentanaEmergente = (dia) => {
    const fechaActual = `${anio}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}`;
    const eventoActual = obtenerEvento(fechaActual);
    if (eventoActual) {
      setDetallesVentana(eventoActual.nombre);
      setMostrarVentana(true);
    }
  };

  const cerrarVentanaEmergente = () => {
    setMostrarVentana(false);
  };

  return (
    <div>
        <h2>{`${anio} - ${mes < 10 ? '0' + mes : mes}`}</h2>
        <div className="navegacion">
            <button onClick={() => manejarCambioMes(-1)}>Mes Anterior</button>
            <button onClick={() => manejarCambioMes(1)}>Mes Siguiente</button>
        </div>

        <div className="calendario dias">
            {dias.map((dia) => {
                const fechaActual = `${anio}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}`;
                const eventoActual = obtenerEvento(fechaActual);
                const esEvento = eventoActual ? 'evento' : '';

                return (
                    <div
                        key={dia}
                        className={`dia ${esEvento}`}
                        onClick={() => abrirVentanaEmergente(dia)}
                    >
                        {dia}
                        {/* Eliminar el nombre del evento de aquí */}
                    </div>
                );
            })}
        </div>

        {mostrarVentana && (
            <div className="ventana-emergente">
                <div className="contenido-ventana">
                    <p>{detallesVentana}</p>
                    <button onClick={cerrarVentanaEmergente}>Cerrar</button>
                </div>
            </div>
        )}
    </div>
);

};


export default Calendario;