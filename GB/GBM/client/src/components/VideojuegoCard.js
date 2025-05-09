import React from 'react';
import { Link } from 'react-router-dom';
import './VideojuegoCard.css';

const VideojuegoCard = ({ evaluacion }) => {
  return (
    <div className="videojuego-card">
      <div className="header">
        <h2>{evaluacion.nombre_videojuego}</h2>
        <div className="promedio-total">Promedio: {evaluacion.promedio_total}</div>
      </div>
      <div className="equipo-info">Equipo: {evaluacion.equipo}</div>
      
      <div className="criterios">
        {evaluacion.criterios.slice(0, 3).map((criterio, index) => (
          <div className="criterio" key={index}>
            <div className="criterio-header">
              <div className="criterio-nombre">{criterio.nombre}</div>
              <div className="criterio-promedio">{criterio.promedio}</div>
            </div>
            <div className="criterio-descripcion">{criterio.descripcion}</div>
          </div>
        ))}
        {evaluacion.criterios.length > 3 && (
          <div className="criterio" style={{ textAlign: 'center', padding: '10px' }}>
            <span style={{ color: '#7f8c8d', fontStyle: 'italic' }}>
              Y {evaluacion.criterios.length - 3} criterios más...
            </span>
          </div>
        )}
      </div>
      
      <div className="total-evaluaciones">
        Total de evaluaciones: {evaluacion.total_evaluaciones}
      </div>
      
      <Link to={`/evaluaciones/detalle?id=${evaluacion.id_videojuego}`} className="ver-detalle">
        Ver detalle completo →
      </Link>
    </div>
  );
};

export default VideojuegoCard; 