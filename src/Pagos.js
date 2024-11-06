
import React, { useState } from 'react';
import './Components/CSS/Pagos.css';

function ContactosPagos() {
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  const servicios = [
    { id: 1, nombre: 'Servicio de Electricidad (CFE)' },
    { id: 2, nombre: 'Servicio de Agua' },
  ];

  const abrirFormulario = (id) => {
    setServicioSeleccionado(servicioSeleccionado === id ? null : id);
  };

  return (
    <div className="pagos-container">
      <header className="pagos-header">
        <h1>Directorio de Pagos de Servicios</h1>
        <p>Facilitamos el pago de tus servicios básicos desde un solo lugar.</p>
      </header>

      <div className="servicios">
        {servicios.map((servicio) => (
          <div key={servicio.id} className="servicio">
            <div className="banner" onClick={() => abrirFormulario(servicio.id)}>
              <h2>{servicio.nombre}</h2>
            </div>
            {servicioSeleccionado === servicio.id && (
              <div className="formulario-pago">
                <h3>Formulario de Pago</h3>
                <label>
                  Número de Serie:
                  <input type="text" placeholder="Ingresa tu número de serie" />
                </label>
                
                <label>
                  Método de Pago:
                  <select>
                    <option value="credit">Tarjeta de Crédito</option>
                    <option value="debit">Tarjeta de Débito</option>
                  </select>
                </label>

                <label>
                  Número de Tarjeta:
                  <input type="text" placeholder="1234 5678 9012 3456" />
                </label>

                <label>
                  Fecha de Caducidad:
                  <input type="text" placeholder="MM/AA" />
                </label>

                <label>
                  Clave de Seguridad (CVV):
                  <input type="text" placeholder="123" />
                </label>

                <label>
                  Nombre del Titular:
                  <input type="text" placeholder="Nombre completo" />
                </label>

                <label>
                  Calle:
                  <input type="text" placeholder="Dirección de la calle" />
                </label>

                <label>
                  Ciudad:
                  <input type="text" placeholder="Ciudad" />
                </label>

                <label>
                  Estado:
                  <input type="text" placeholder="Estado" />
                </label>

                <label>
                  País:
                  <input type="text" placeholder="País" />
                </label>

                <p className="nota">Nota: Esta es una maqueta de diseño. Los datos no serán enviados ni almacenados.</p>
                <button className="btn-confirmar">Confirmar Datos</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactosPagos;