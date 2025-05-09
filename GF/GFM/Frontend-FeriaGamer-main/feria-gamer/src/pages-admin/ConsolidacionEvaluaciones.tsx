import React, { useState, useEffect } from 'react';
import '../styles/ConsolidacionEvaluaciones.css';
import EvaluacionesService from '../services/evaluaciones/EvaluacionesService';
import { ConsolidacionEvaluacionDto } from '../backend/evaluaciones/dto/consolidacion-evaluacion.dto';

const ConsolidacionEvaluaciones: React.FC = () => {
  const [consolidaciones, setConsolidaciones] = useState<ConsolidacionEvaluacionDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  useEffect(() => {
    fetchConsolidaciones();
  }, []);

  const fetchConsolidaciones = async () => {
    try {
      const data = await EvaluacionesService.obtenerConsolidaciones();
      setConsolidaciones(data);
      setLastUpdate(new Date());
      setLoading(false);
    } catch (err) {
      console.error('Error al cargar las evaluaciones consolidadas:', err);
      setError('Error al cargar las evaluaciones consolidadas');
      setLoading(false);
    }
  };

  const getRatingClass = (promedio: number): string => {
    if (promedio >= 4.5) return 'rating-5';
    if (promedio >= 3.5) return 'rating-4';
    if (promedio >= 2.5) return 'rating-3';
    if (promedio >= 1.5) return 'rating-2';
    return 'rating-1';
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) return <div className="loading">Cargando...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="consolidacion-container">
      <div className="header-container">
        <h1>Dashboard de Evaluaciones en Tiempo Real</h1>
        <button onClick={fetchConsolidaciones} className="refresh-btn">
          ↻ Actualizar datos
        </button>
      </div>

      <div className="table-container">
        <h2>Tabla de Resultados por Criterio</h2>
        <table className="evaluaciones-table">
          <thead>
            <tr>
              <th>Videojuego</th>
              <th>Equipo</th>
              <th>NRC</th>
              {consolidaciones[0]?.criterios.map(criterio => (
                <th key={criterio.id_criterio}>{criterio.nombre}</th>
              ))}
              <th>Promedio Final</th>
            </tr>
          </thead>
          <tbody>
            {consolidaciones.map(consolidacion => (
              <tr key={consolidacion.id_videojuego}>
                <td>{consolidacion.nombre_videojuego}</td>
                <td>{consolidacion.equipo}</td>
                <td>{consolidacion.nrc ? consolidacion.nrc.join(', ') : '-'}</td>
                {consolidacion.criterios.map(criterio => (
                  <td key={criterio.id_criterio}>
                    <span className={`rating-display ${getRatingClass(criterio.promedio)}`}>
                      {criterio.promedio.toFixed(1)}
                    </span>
                  </td>
                ))}
                <td>
                  <strong>
                    <span className={`rating-display ${getRatingClass(consolidacion.promedio_total)}`}>
                      {consolidacion.promedio_total.toFixed(1)}
                    </span>
                  </strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="last-update">
          Última actualización: {formatDate(lastUpdate)}
        </div>
      </div>

      <div className="table-container">
        <h2>Ranking General</h2>
        <table className="evaluaciones-table">
          <thead>
            <tr>
              <th>Posición</th>
              <th>Videojuego</th>
              <th>Equipo</th>
              <th>Promedio</th>
            </tr>
          </thead>
          <tbody>
            {[...consolidaciones]
              .sort((a, b) => b.promedio_total - a.promedio_total)
              .map((consolidacion, index) => (
                <tr key={consolidacion.id_videojuego}>
                  <td>{index + 1}</td>
                  <td>{consolidacion.nombre_videojuego}</td>
                  <td>{consolidacion.equipo}</td>
                  <td>
                    <span className={`rating-display ${getRatingClass(consolidacion.promedio_total)}`}>
                      {consolidacion.promedio_total.toFixed(1)}
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConsolidacionEvaluaciones; 