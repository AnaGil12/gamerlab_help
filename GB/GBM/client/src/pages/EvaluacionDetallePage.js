import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import CriterioItem from '../components/CriterioItem';
import { getConsolidacionById } from '../services/api';
import './EvaluacionDetallePage.css';

const EvaluacionDetallePage = () => {
  const [searchParams] = useSearchParams();
  const idVideojuego = searchParams.get('id');
  
  const [evaluacion, setEvaluacion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      if (!idVideojuego) {
        setError('ID de videojuego no especificado');
        setLoading(false);
        return;
      }
      
      try {
        const data = await getConsolidacionById(idVideojuego);
        setEvaluacion(data);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Error al cargar el detalle de evaluación');
        setLoading(false);
      }
    };
    
    fetchData();
  }, [idVideojuego]);
  
  return (
    <div className="evaluacion-detalle-page">
      <h1>Detalle de Evaluación</h1>
      
      {loading && (
        <div className="loading">
          <p>Cargando detalle de evaluación...</p>
        </div>
      )}
      
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
      
      {!loading && !error && evaluacion && (
        <div className="detalle-content">
          <div className="videojuego-header">
            <div className="videojuego-info">
              <h2>{evaluacion.nombre_videojuego}</h2>
              <div className="equipo-info">Equipo: {evaluacion.equipo}</div>
            </div>
            <div className="promedio-container">
              <div className="promedio-label">Promedio Total</div>
              <div className="promedio-valor">{evaluacion.promedio_total}</div>
            </div>
          </div>
          
          <div className="criterios-container">
            <h3>Criterios de Evaluación</h3>
            {evaluacion.criterios.map((criterio, index) => (
              <CriterioItem key={index} criterio={criterio} />
            ))}
          </div>
          
          <div className="total-evaluaciones">
            <p>Este videojuego ha recibido un total de {evaluacion.total_evaluaciones} evaluaciones.</p>
          </div>
        </div>
      )}
      
      <Link to="/" className="volver">← Volver a la lista</Link>
    </div>
  );
};

export default EvaluacionDetallePage; 