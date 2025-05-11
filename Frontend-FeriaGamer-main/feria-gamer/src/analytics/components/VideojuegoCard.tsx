import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/VideojuegoCard.css';

// Interfaces para los datos
interface CriterioEvaluado {
  id_criterio: number;
  nombre: string;
  descripcion: string;
  promedio: number;
}

interface Videojuego {
  id_videojuego: number;
  nombre_videojuego: string;
  equipo: string;
  criterios: CriterioEvaluado[];
  promedio_total: number;
  total_evaluaciones: number;
  nrc: string[];
}

// Componente para mostrar una tarjeta de videojuego
const VideojuegoCard: React.FC<{ videojuego: Videojuego }> = ({ videojuego }) => {
  const criteriosMostrados = videojuego.criterios.slice(0, 3);
  const criteriosExtra = videojuego.criterios.length - 3;

  return (
    <div className="vjcard-container">
      <div className="vjcard-header">
        <div>
          <div className="vjcard-title">{videojuego.nombre_videojuego}</div>
          <div className="vjcard-equipo">Equipo: {videojuego.equipo}</div>
        </div>
        <div className="vjcard-promedio">
          Promedio: <span>{videojuego.promedio_total.toFixed(2)}</span>
        </div>
      </div>
      <div className="vjcard-criterios-list">
        {criteriosMostrados.map((criterio) => (
          <div key={criterio.id_criterio} className="vjcard-criterio-item">
            <div className="vjcard-criterio-main">
              <div className="vjcard-criterio-nombre">{criterio.nombre}</div>
              <span className="vjcard-badge-azul">{criterio.promedio.toFixed(1)}</span>
            </div>
            <div className="vjcard-criterio-desc">{criterio.descripcion}</div>
          </div>
        ))}
        {criteriosExtra > 0 && (
          <div className="vjcard-criterio-mas">Y {criteriosExtra} criterios más...</div>
        )}
      </div>
      <div className="vjcard-footer">
        <Link to={`/estadisticas/${videojuego.id_videojuego}`} className="vjcard-link">Ver detalle completo →</Link>
        <span className="vjcard-total-evals">Total de evaluaciones: {videojuego.total_evaluaciones}</span>
      </div>
    </div>
  );
};

export default VideojuegoCard; 