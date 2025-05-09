import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardCard from '../components/DashboardCard';
import { getConsolidaciones, getJurados, getAnalytics } from '../services/api';
import './DashboardPage.css';

const DashboardPage = () => {
  const [consolidaciones, setConsolidaciones] = useState([]);
  const [jurados, setJurados] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('general');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [consolidacionesData, juradosData, analyticsData] = await Promise.all([
          getConsolidaciones(),
          getJurados(),
          getAnalytics()
        ]);
        
        setConsolidaciones(consolidacionesData);
        setJurados(juradosData);
        setAnalytics(analyticsData);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Error al cargar los datos del dashboard');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleRefresh = async () => {
    setLoading(true);
    try {
      const [consolidacionesData, juradosData, analyticsData] = await Promise.all([
        getConsolidaciones(),
        getJurados(),
        getAnalytics()
      ]);
      
      setConsolidaciones(consolidacionesData);
      setJurados(juradosData);
      setAnalytics(analyticsData);
      setLoading(false);
    } catch (err) {
      setError(err.message || 'Error al actualizar los datos');
      setLoading(false);
    }
  };

  // Procesamiento de datos para el dashboard
  const ranking = [...consolidaciones].sort((a, b) => b.promedio_total - a.promedio_total);
  
  const totalJurados = jurados.length;
  
  const progreso = consolidaciones.map(c => ({
    id_videojuego: c.id_videojuego,
    nombre_videojuego: c.nombre_videojuego,
    jurados_evaluaron: c.total_evaluaciones,
    total_jurados: totalJurados,
    porcentaje_completado: Math.round((c.total_evaluaciones / totalJurados) * 100),
  }));

  // Criterios disponibles
  const criterios = Array.from(
    new Set(consolidaciones.flatMap(c => c.criterios.map(k => k.nombre)))
  );

  return (
    <div className="dashboard-page">
      <div className="header-container">
        <h1>Dashboard de Evaluaciones en Tiempo Real</h1>
        <div className="actions-container">
          <button className="refresh-btn" onClick={handleRefresh} disabled={loading}>
            {loading ? 'Actualizando...' : '↻ Actualizar datos'}
          </button>
          <div className="export-options">
            <a href="/evaluaciones/exportar_excel" className="export-btn excel-btn">
              <span className="export-icon">📊</span> Exportar a Excel
            </a>
            <a href="/evaluaciones/exportar_pdf" className="export-btn pdf-btn">
              <span className="export-icon">📄</span> Exportar a PDF
            </a>
          </div>
        </div>
      </div>
      
      <Link to="/" className="volver">← Volver al inicio</Link>
      
      {loading && (
        <div className="loading">
          <p>Cargando datos del dashboard...</p>
        </div>
      )}
      
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
      
      {!loading && !error && (
        <>
          <div className="tabs">
            <div 
              className={`tab ${activeTab === 'general' ? 'active' : ''}`}
              onClick={() => setActiveTab('general')}
            >
              General
            </div>
            <div 
              className={`tab ${activeTab === 'ranking' ? 'active' : ''}`}
              onClick={() => setActiveTab('ranking')}
            >
              Ranking
            </div>
            <div 
              className={`tab ${activeTab === 'progreso' ? 'active' : ''}`}
              onClick={() => setActiveTab('progreso')}
            >
              Progreso
            </div>
          </div>
          
          {activeTab === 'general' && (
            <div className="dashboard-grid">
              <DashboardCard title="Resumen de Evaluaciones" className="full-width">
                <div className="resumen-info">
                  <div className="metric">
                    <div className="metric-value">{consolidaciones.length}</div>
                    <div className="metric-label">Videojuegos evaluados</div>
                  </div>
                  <div className="metric">
                    <div className="metric-value">{jurados.length}</div>
                    <div className="metric-label">Jurados participantes</div>
                  </div>
                  <div className="metric">
                    <div className="metric-value">
                      {consolidaciones.reduce((sum, c) => sum + c.total_evaluaciones, 0)}
                    </div>
                    <div className="metric-label">Total de evaluaciones</div>
                  </div>
                </div>
              </DashboardCard>
              
              <DashboardCard title="Top 3 Videojuegos">
                <div className="top-list">
                  {ranking.slice(0, 3).map((vj, index) => (
                    <div className="top-item" key={vj.id_videojuego}>
                      <div className="ranking-number">{index + 1}</div>
                      <div className="top-info">
                        <div className="top-title">{vj.nombre_videojuego}</div>
                        <div className="top-equipo">Equipo: {vj.equipo}</div>
                        <div className="top-promedio">
                          Promedio: <span className="promedio-value">{vj.promedio_total}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </DashboardCard>
              
              <DashboardCard title="Distribución por NRC">
                {analytics && analytics.distribucionPorMateria && (
                  <div className="distribucion-list">
                    {analytics.distribucionPorMateria.map((nrc, index) => (
                      <div className="distribucion-item" key={index}>
                        <div className="distribucion-info">
                          <div className="distribucion-title">{nrc.nrc}</div>
                          <div className="distribucion-datos">
                            <span>{nrc.cantidad} videojuegos</span>
                            <span className="promedio-value">Promedio: {nrc.promedio}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </DashboardCard>
            </div>
          )}
          
          {activeTab === 'ranking' && (
            <DashboardCard title="Ranking Completo de Videojuegos">
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Videojuego</th>
                      <th>Equipo</th>
                      <th>Promedio</th>
                      <th>Evaluaciones</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ranking.map((vj, index) => (
                      <tr key={vj.id_videojuego}>
                        <td>{index + 1}</td>
                        <td>{vj.nombre_videojuego}</td>
                        <td>{vj.equipo}</td>
                        <td>
                          <div className={`rating-display rating-${Math.round(vj.promedio_total)}`}>
                            {vj.promedio_total}
                          </div>
                        </td>
                        <td>{vj.total_evaluaciones}</td>
                        <td>
                          <Link to={`/evaluaciones/detalle?id=${vj.id_videojuego}`}>
                            Ver detalle
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DashboardCard>
          )}
          
          {activeTab === 'progreso' && (
            <DashboardCard title="Progreso de Evaluaciones">
              <div className="progreso-list">
                {progreso.map((p) => (
                  <div className="progreso-item" key={p.id_videojuego}>
                    <div className="progreso-info">
                      <div className="progreso-title">{p.nombre_videojuego}</div>
                      <div className="progreso-text">
                        {p.jurados_evaluaron} de {p.total_jurados} jurados ({p.porcentaje_completado}%)
                      </div>
                    </div>
                    <div className="progress-container">
                      <div 
                        className="progress-bar" 
                        style={{ width: `${p.porcentaje_completado}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </DashboardCard>
          )}
          
          <div className="last-update">
            Última actualización: {new Date().toLocaleString()}
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardPage; 