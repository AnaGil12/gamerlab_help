import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css'; // Corrijo la ruta para que apunte a la carpeta styles
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

// Simulación de datos
const videojuegos = [
  {
    id: 1,
    nombre: 'Space Adventure',
    equipo: 'Game Masters',
    nrc: '12345',
    criterios: [4.5, 4, 3.5, 4, 4.5, 4],
    promedio: 4.08,
    evaluaciones: 2,
    totalJueces: 2,
    estado: 'Completado',
    ultimaEvaluacion: '2024-03-15',
    juecesAsignados: ['Juan Pérez', 'María García']
  },
  {
    id: 2,
    nombre: 'Dungeon Escape',
    equipo: 'Pixel Warriors',
    nrc: '67890',
    criterios: [3.5, 4.5, 5, 4, 3.5, 4.5],
    promedio: 4.17,
    evaluaciones: 2,
    totalJueces: 2,
    estado: 'Completado',
    ultimaEvaluacion: '2024-03-14',
    juecesAsignados: ['Carlos López', 'Ana Martínez']
  },
  {
    id: 3,
    nombre: 'Puzzle Quest',
    equipo: 'Equipo Gamma',
    nrc: '54321',
    criterios: [4.7, 4.5, 4.6, 4.8, 4.9, 4.7],
    promedio: 4.7,
    evaluaciones: 3,
    totalJueces: 3,
    estado: 'Completado',
    ultimaEvaluacion: '2024-03-16',
    juecesAsignados: ['Roberto Sánchez', 'Laura Torres', 'Pedro Ramírez']
  },
  {
    id: 4,
    nombre: 'Battle Arena',
    equipo: 'Alpha Warriors',
    nrc: '12345',
    criterios: [3.8, 4.1, 4.0, 3.9, 4.2, 4.0],
    promedio: 4.0,
    evaluaciones: 2,
    totalJueces: 3,
    estado: 'En Proceso',
    ultimaEvaluacion: '2024-03-13',
    juecesAsignados: ['Diana Ruiz', 'Jorge Mendoza', 'Carmen Vega']
  },
  {
    id: 5,
    nombre: 'Mystery Mansion',
    equipo: 'Beta Squad',
    nrc: '67890',
    criterios: [4.2, 4.3, 4.1, 4.0, 4.4, 4.2],
    promedio: 4.2,
    evaluaciones: 2,
    totalJueces: 3,
    estado: 'En Proceso',
    ultimaEvaluacion: '2024-03-15',
    juecesAsignados: ['Fernando Díaz', 'Sofia Castro', 'Luis Morales']
  },
  {
    id: 6,
    nombre: 'Racing Rivals',
    equipo: 'Speed Demons',
    nrc: '54321',
    criterios: [3.9, 4.0, 4.2, 4.1, 4.0, 4.3],
    promedio: 4.08,
    evaluaciones: 1,
    totalJueces: 3,
    estado: 'Pendiente',
    ultimaEvaluacion: '2024-03-12',
    juecesAsignados: ['Patricia Flores', 'Miguel Ángel', 'Ricardo Vargas']
  },
];

const criterios = [
  'Interfaz de Usuario',
  'Interacción',
  'Resultados',
  'Presentación Proyecto',
  'Funcionamiento del Programa',
  'Presentación personal del equipo',
];

const nrcs = [
  { nrc: '12345', materia: 'Matemáticas', promedio: 4.08 },
  { nrc: '67890', materia: 'Física', promedio: 4.17 },
  { nrc: '54321', materia: 'Programación', promedio: 4.49 },
];

const COLORS = ['#8a2be2', '#2471a3', '#2ecc40', '#FFD700', '#C0C0C0', '#CD7F32'];

const DashboardEstadisticas: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState('resultados');

  // Top 3 videojuegos
  const top3 = [...videojuegos].sort((a, b) => b.promedio - a.promedio).slice(0, 3);

  // Handler para refrescar
  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 800); // Simula fetch
  };

  // Datos para gráficos
  const dataBar = videojuegos.map(vj => ({ nombre: vj.nombre, promedio: vj.promedio }));
  const dataPie = nrcs.map(nrc => ({ name: nrc.materia, value: nrc.promedio }));

  return (
    <div className="dashboard-analytics-container">
      {/* Botón volver al home */}
      <div className="dashboard-header-container">
        <div className="dashboard-header-content">
          <div className="header-left">
            <Link to="/reportes" className="back-button">
              <i className="fas fa-arrow-left"></i>
              <span>Volver a reportes</span>
            </Link>
          </div>
          <div className="header-center">
            <h1>Dashboard de Evaluaciones</h1>
          </div>
          <div className="header-right">
            <button 
              className="refresh-button" 
              onClick={handleRefresh} 
              disabled={loading}
            >
              <i className="fas fa-sync-alt"></i>
              <span>Actualizar datos</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sección 1: Ventana con tabs */}
      <section className="dashboard-section">
        <div className="dashboard-card" style={{maxWidth: 900, margin: '0 auto'}}>
          <div className="dashboard-tabs">
            <button className={tab === 'resultados' ? 'tab active' : 'tab'} onClick={() => setTab('resultados')}>Tabla de Resultados</button>
            <button className={tab === 'estado' ? 'tab active' : 'tab'} onClick={() => setTab('estado')}>Estado de Evaluaciones</button>
            <button className={tab === 'nrc' ? 'tab active' : 'tab'} onClick={() => setTab('nrc')}>Distribución por Materia</button>
          </div>
          <div className="dashboard-tab-content">
            {tab === 'resultados' && (
              <div className="table-responsive">
                <table className="resultados-table">
                  <thead>
                    <tr>
                      <th style={{minWidth: '180px'}}>Videojuego</th>
                      <th style={{minWidth: '150px'}}>Equipo</th>
                      {criterios.map((c) => (
                        <th key={c} style={{minWidth: '120px'}}>
                          <div className="criteria-header">
                            <span>{c}</span>
                          </div>
                        </th>
                      ))}
                      <th style={{minWidth: '120px'}}>Promedio Final</th>
                    </tr>
                  </thead>
                  <tbody>
                    {videojuegos.map((vj) => (
                      <tr key={vj.id}>
                        <td>
                          <div className="game-cell">
                            <a href="#">{vj.nombre}</a>
                          </div>
                        </td>
                        <td>
                          <div className="team-cell">
                            {vj.equipo}
                          </div>
                        </td>
                        {vj.criterios.map((p, i) => (
                          <td key={i}>
                            <div className="score-cell">
                              <span className="score-badge">{p.toFixed(1)}</span>
                            </div>
                          </td>
                        ))}
                        <td>
                          <div className="final-score-cell">
                            <span className="final-score-badge">{vj.promedio.toFixed(2)}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {tab === 'estado' && (
              <div className="table-responsive">
                <table className="estado-table">
                  <thead>
                    <tr>
                      <th style={{width: '25%'}}>Videojuego</th>
                      <th style={{width: '25%'}}>Equipo</th>
                      <th style={{width: '25%'}}>NRC</th>
                      <th style={{width: '25%'}}>Estado de Evaluación</th>
                    </tr>
                  </thead>
                  <tbody>
                    {videojuegos.map((vj) => {
                      const porcentaje = (vj.evaluaciones/vj.totalJueces)*100;
                      const estado = porcentaje === 100 ? 'Completado' : porcentaje > 0 ? 'En Proceso' : 'Pendiente';
                      
                      return (
                        <tr key={vj.id}>
                          <td>
                            <div className="game-cell">
                              <a href="#">{vj.nombre}</a>
                            </div>
                          </td>
                          <td>
                            <div className="team-cell">
                              {vj.equipo}
                            </div>
                          </td>
                          <td>
                            <div className="nrc-cell">
                              {vj.nrc}
                            </div>
                          </td>
                          <td>
                            <div className="progress-cell">
                              <div className="progress-bar-container">
                                <div className="progress-bar-bg">
                                  <div 
                                    className="progress-bar-fill" 
                                    style={{
                                      width: `${porcentaje}%`,
                                      background: estado === 'Completado' 
                                        ? 'linear-gradient(90deg, #2ecc71, #27ae60)'
                                        : estado === 'En Proceso'
                                        ? 'linear-gradient(90deg, #3498db, #2980b9)'
                                        : 'linear-gradient(90deg, #e74c3c, #c0392b)'
                                    }} 
                                  />
                                </div>
                                <span className="progress-label">
                                  {vj.evaluaciones} de {vj.totalJueces} ({porcentaje.toFixed(0)}%)
                                </span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
            {tab === 'nrc' && (
              <div className="table-responsive">
                <table className="nrc-table">
                  <thead>
                    <tr>
                      <th style={{width: '25%'}}>NRC</th>
                      <th style={{width: '50%'}}>Materia</th>
                      <th style={{width: '25%'}}>Promedio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nrcs.map((n) => (
                      <tr key={n.nrc}>
                        <td>
                          <div className="nrc-cell">
                            {n.nrc}
                          </div>
                        </td>
                        <td>
                          <div className="subject-cell">
                            {n.materia}
                          </div>
                        </td>
                        <td>
                          <div className="score-cell">
                            <span className="score-badge">{n.promedio.toFixed(2)}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Sección 2: Top 3 y Ranking general juntos */}
      <section className="dashboard-section">
        <div style={{maxWidth: 900, margin: '0 auto', display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center'}}>
          <div className="dashboard-card" style={{flex: 1, minWidth: 320, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: 'auto', padding: '24px'}}>
            <h2 style={{fontSize: '1.5rem', marginBottom: '24px', textAlign: 'center'}}>Top 3 Videojuegos</h2>
            <div className="top3-podium">
              {top3.map((vj, idx) => {
                let posClass = '';
                if (idx === 0) posClass = 'gold';
                else if (idx === 1) posClass = 'silver';
                else if (idx === 2) posClass = 'bronze';
                return (
                  <div key={vj.id} className={`podium-item ${posClass}`}>
                    <div className="podium-position">{idx + 1}</div>
                    <div className="podium-game">
                      <div className="podium-name">{vj.nombre}</div>
                      <div className="podium-score">{vj.promedio.toFixed(2)}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="dashboard-card" style={{flex: 2, minWidth: 320, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '24px'}}>
            <h2 style={{fontSize: '1.3rem', marginBottom: '24px'}}>Ranking General</h2>
            <div className="ranking-table-container">
              <table className="ranking-table">
                <thead>
                  <tr>
                    <th>Posición</th>
                    <th>Videojuego</th>
                    <th>Promedio</th>
                  </tr>
                </thead>
                <tbody>
                  {[...videojuegos].sort((a, b) => b.promedio - a.promedio).map((vj, idx) => (
                    <tr key={vj.id}>
                      <td><span className="ranking-pos">{idx+1}</span></td>
                      <td><a href="#">{vj.nombre}</a></td>
                      <td><span className="score-badge">{vj.promedio.toFixed(2)}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3: Gráficos */}
      <section className="dashboard-section">
        <div className="dashboard-card" style={{maxWidth: 900, margin: '0 auto'}}>
          <h2>Gráficos del Evento</h2>
          <div style={{height: 350, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32}}>
            {/* Gráfico de barras */}
            <div style={{width: '55%', height: 300, background: '#fafbff', borderRadius: 10, padding: 16}}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dataBar} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
                  <XAxis dataKey="nombre" tick={{ fontSize: 13 }} angle={-15} textAnchor="end" height={60} />
                  <YAxis domain={[0, 5]} tick={{ fontSize: 13 }} />
                  <Tooltip />
                  <Bar dataKey="promedio" fill="#8a2be2" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            {/* Gráfico de pastel */}
            <div style={{width: '40%', height: 300, background: '#fafbff', borderRadius: 10, padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie data={dataPie} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} label>
                    {dataPie.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend verticalAlign="bottom" height={36} />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardEstadisticas; 