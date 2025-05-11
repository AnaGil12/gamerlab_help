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
  // Mostrar solo los primeros 3 criterios
  const criteriosMostrados = videojuego.criterios.slice(0, 3);
  const hayMasCriterios = videojuego.criterios.length > 3;

  return (
    <div className="card videojuego-card">
      {/* Promedio total en la esquina superior derecha - ahora como cuadrado con bordes redondeados */}
      <div className="promedio-badge">
        {videojuego.promedio_total.toFixed(1)}
      </div>

      <h2>{videojuego.nombre_videojuego}</h2>
      <p><strong>Equipo:</strong> {videojuego.equipo}</p>
      <p><strong>NRC:</strong> {videojuego.nrc.join(', ')}</p>
      <p><strong>Total evaluaciones:</strong> {videojuego.total_evaluaciones}</p>
      
      <div className="table-container criterios-container">
        <table className="table">
          <thead>
            <tr>
              <th>Criterio</th>
              <th>Descripción</th>
              <th>Promedio</th>
            </tr>
          </thead>
          <tbody>
            {criteriosMostrados.map((criterio) => (
              <tr key={criterio.id_criterio}>
                <td>{criterio.nombre}</td>
                <td>{criterio.descripcion}</td>
                <td style={{ fontWeight: 'bold' }}>{criterio.promedio.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {hayMasCriterios && (
          <div className="ver-mas-criterios">
            Ver todos los criterios...
          </div>
        )}
      </div>
      
      {/* Enlace a estadísticas individuales */}
      <Link to={`/estadisticas/${videojuego.id_videojuego}`} className="estadisticas-link">
        Ver estadísticas detalladas →
      </Link>
    </div>
  );
};

export default VideojuegoCard; 