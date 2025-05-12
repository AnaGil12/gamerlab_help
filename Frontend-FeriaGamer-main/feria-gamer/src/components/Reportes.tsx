import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Criterio {
  nombre: string;
  promedio: number;
  descripcion: string;
}

interface Evaluacion {
  id_videojuego: string;
  nombre_videojuego: string;
  equipo: string;
  promedio_total: number;
  criterios: Criterio[];
  total_evaluaciones: number;
}

const API_BASE_URL = 'http://localhost:3001'; // URL del backend actualizada al puerto correcto

const Reportes: React.FC = () => {
  const [evaluaciones, setEvaluaciones] = useState<Evaluacion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvaluaciones = async () => {
      try {
        console.log('Intentando obtener evaluaciones desde:', `${API_BASE_URL}/evaluaciones/consolidacion`);
        const response = await fetch(`${API_BASE_URL}/evaluaciones/consolidacion`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          mode: 'cors'
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Error response:', errorText);
          throw new Error(`Error del servidor: ${response.status} - ${errorText}`);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          console.error('Tipo de contenido no válido:', contentType);
          throw new Error('La respuesta del servidor no es JSON válido');
        }

        const data = await response.json();
        console.log('Datos recibidos:', data);
        setEvaluaciones(data);
        setLoading(false);
      } catch (error) {
        console.error('Error detallado:', error);
        setError(error instanceof Error ? error.message : 'Error desconocido');
        setLoading(false);
      }
    };

    fetchEvaluaciones();
  }, []);

  const handleDashboardClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = `${API_BASE_URL}/evaluaciones/dashboard`;
  };

  if (loading) {
    return <div className="loading">Cargando evaluaciones...</div>;
  }

  if (error) {
    return <div className="loading">Error al cargar las evaluaciones: {error}</div>;
  }

  if (evaluaciones.length === 0) {
    return <div>No hay evaluaciones disponibles</div>;
  }

  return (
    <div>
      <div className="page-header">
        <h1>Reportes de Evaluaciones</h1>
        <a 
          href={`${API_BASE_URL}/evaluaciones/dashboard`}
          className="dashboard-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="dashboard-icon">📊</span>Dashboard en tiempo real
        </a>
      </div>

      <style>{`
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          color: #333;
        }
        h1 {
          color: #2c3e50;
          border-bottom: 2px solid #3498db;
          padding-bottom: 10px;
        }
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }
        .dashboard-link {
          background-color: #2980b9;
          color: white;
          padding: 10px 15px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
        }
        .dashboard-link:hover {
          background-color: #3498db;
        }
        .dashboard-icon {
          margin-right: 8px;
        }
        .videojuego-card {
          background-color: #f8f9fa;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 30px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }
        .header h2 {
          margin: 0;
          color: #2980b9;
        }
        .promedio-total {
          background-color: #2980b9;
          color: white;
          padding: 8px 15px;
          border-radius: 20px;
          font-weight: bold;
        }
        .criterios {
          margin-top: 20px;
        }
        .criterio {
          background-color: white;
          border-radius: 6px;
          padding: 15px;
          margin-bottom: 10px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .criterio-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        .criterio-nombre {
          font-weight: bold;
          color: #2c3e50;
        }
        .criterio-promedio {
          background-color: #e0f7fa;
          padding: 3px 10px;
          border-radius: 12px;
          color: #0097a7;
          font-weight: bold;
        }
        .criterio-descripcion {
          color: #7f8c8d;
          font-size: 0.9em;
        }
        .loading {
          text-align: center;
          padding: 40px 0;
          color: #7f8c8d;
        }
        .equipo-info {
          color: #7f8c8d;
          font-size: 0.9em;
          margin-bottom: 10px;
        }
        .total-evaluaciones {
          font-size: 0.85em;
          color: #7f8c8d;
          margin-top: 10px;
          text-align: right;
        }
        .ver-detalle {
          display: inline-block;
          margin-top: 15px;
          color: #2980b9;
          text-decoration: none;
          font-weight: bold;
        }
        .ver-detalle:hover {
          text-decoration: underline;
        }
      `}</style>

      {evaluaciones.map((evaluacion) => (
        <div key={evaluacion.id_videojuego} className="videojuego-card">
          <div className="header">
            <h2>{evaluacion.nombre_videojuego}</h2>
            <div className="promedio-total">Promedio: {evaluacion.promedio_total}</div>
          </div>
          <div className="equipo-info">Equipo: {evaluacion.equipo}</div>
          
          <div className="criterios">
            {evaluacion.criterios.slice(0, 3).map((criterio, index) => (
              <div key={index} className="criterio">
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
          
          <a 
            href={`${API_BASE_URL}/evaluaciones/detalle?id=${evaluacion.id_videojuego}`}
            className="ver-detalle"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver detalle completo →
          </a>
        </div>
      ))}
    </div>
  );
};

export default Reportes; 