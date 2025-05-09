import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VideojuegoCard from '../components/VideojuegoCard';
import { getConsolidaciones } from '../services/api';
import './HomePage.css';

const HomePage = () => {
  const [evaluaciones, setEvaluaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getConsolidaciones();
        setEvaluaciones(data);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Error al cargar las evaluaciones');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-page">
      <div className="page-header">
        <h1>GamerLab - Sistema de Evaluación de Videojuegos</h1>
        <Link to="/evaluaciones/dashboard" className="dashboard-link">
          <span className="dashboard-icon">📊</span>Dashboard en tiempo real
        </Link>
      </div>
      
      {loading && (
        <div className="loading">
          <p>Cargando evaluaciones...</p>
        </div>
      )}
      
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
      
      {!loading && !error && evaluaciones.length === 0 && (
        <p>No hay evaluaciones disponibles</p>
      )}
      
      {!loading && !error && evaluaciones.length > 0 && (
        <div className="evaluaciones-list">
          {evaluaciones.map((evaluacion) => (
            <VideojuegoCard key={evaluacion.id_videojuego} evaluacion={evaluacion} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage; 