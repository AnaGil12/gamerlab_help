import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import VideojuegoCard from '../components/VideojuegoCard';
import '../styles/Reportes.css';

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

// Componente principal de Reportes
const Reportes: React.FC = () => {
  const [videojuegos, setVideojuegos] = useState<Videojuego[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerConsolidaciones = async () => {
      try {
        // Simulamos datos para la demostración con todos los criterios solicitados
        const datosSimulados: Videojuego[] = [
          {
            id_videojuego: 1,
            nombre_videojuego: "Space Explorer",
            equipo: "Equipo Alfa",
            criterios: [
              { id_criterio: 1, nombre: "Interfaz de Usuario", descripcion: "Diseño, colores, usabilidad", promedio: 4.5 },
              { id_criterio: 2, nombre: "Interacción", descripcion: "Controles, guía al usuario, intuitividad", promedio: 4.2 },
              { id_criterio: 3, nombre: "Resultados", descripcion: "Reacciones, recompensas, retroalimentación visual", promedio: 4.8 },
              { id_criterio: 4, nombre: "Presentación del Proyecto", descripcion: "Claridad, coherencia, comunicación del objetivo", promedio: 4.3 },
              { id_criterio: 5, nombre: "Funcionamiento del Programa", descripcion: "Que no tenga errores y cumpla su propósito", promedio: 4.6 },
              { id_criterio: 6, nombre: "Presentación personal del equipo", descripcion: "Lenguaje corporal, presencia, orden y seguridad al exponer", promedio: 4.4 }
            ],
            promedio_total: 4.5,
            total_evaluaciones: 3,
            nrc: ["12345"]
          },
          {
            id_videojuego: 2,
            nombre_videojuego: "Dungeon Master",
            equipo: "Equipo Beta",
            criterios: [
              { id_criterio: 1, nombre: "Interfaz de Usuario", descripcion: "Diseño, colores, usabilidad", promedio: 4.0 },
              { id_criterio: 2, nombre: "Interacción", descripcion: "Controles, guía al usuario, intuitividad", promedio: 3.7 },
              { id_criterio: 3, nombre: "Resultados", descripcion: "Reacciones, recompensas, retroalimentación visual", promedio: 4.3 },
              { id_criterio: 4, nombre: "Presentación del Proyecto", descripcion: "Claridad, coherencia, comunicación del objetivo", promedio: 3.9 },
              { id_criterio: 5, nombre: "Funcionamiento del Programa", descripcion: "Que no tenga errores y cumpla su propósito", promedio: 4.1 },
              { id_criterio: 6, nombre: "Presentación personal del equipo", descripcion: "Lenguaje corporal, presencia, orden y seguridad al exponer", promedio: 3.8 }
            ],
            promedio_total: 4.0,
            total_evaluaciones: 3,
            nrc: ["67890"]
          },
          {
            id_videojuego: 3,
            nombre_videojuego: "Puzzle Quest",
            equipo: "Equipo Gamma",
            criterios: [
              { id_criterio: 1, nombre: "Interfaz de Usuario", descripcion: "Diseño, colores, usabilidad", promedio: 4.7 },
              { id_criterio: 2, nombre: "Interacción", descripcion: "Controles, guía al usuario, intuitividad", promedio: 4.5 },
              { id_criterio: 3, nombre: "Resultados", descripcion: "Reacciones, recompensas, retroalimentación visual", promedio: 4.6 },
              { id_criterio: 4, nombre: "Presentación del Proyecto", descripcion: "Claridad, coherencia, comunicación del objetivo", promedio: 4.8 },
              { id_criterio: 5, nombre: "Funcionamiento del Programa", descripcion: "Que no tenga errores y cumpla su propósito", promedio: 4.9 },
              { id_criterio: 6, nombre: "Presentación personal del equipo", descripcion: "Lenguaje corporal, presencia, orden y seguridad al exponer", promedio: 4.7 }
            ],
            promedio_total: 4.7,
            total_evaluaciones: 3,
            nrc: ["54321"]
          }
        ];

        // Simular tiempo de carga
        setTimeout(() => {
          setVideojuegos(datosSimulados);
          setCargando(false);
        }, 500);

        // En producción, usar esto:
        // const response = await axios.get('/api/evaluaciones/consolidacion');
        // setVideojuegos(response.data);
        // setCargando(false);
      } catch (err) {
        setError("Error al cargar los datos");
        setCargando(false);
        console.error("Error al obtener consolidaciones:", err);
      }
    };

    obtenerConsolidaciones();
  }, []);

  return (
    <div className="reportes-container">
      <div className="reportes-header-container">
        <div className="reportes-header-content">
          <div className="header-left">
            <button 
              className="back-button"
              onClick={() => navigate(-1)}
            >
              <i className="fas fa-arrow-left"></i>
              <span>Volver</span>
            </button>
          </div>
          <div className="header-center">
            <h1>Reportes y Análisis</h1>
          </div>
          <div className="header-right">
            <button 
              className="btn btn-primary dashboard-btn" 
              onClick={() => navigate('/dashboard')}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="10" width="3" height="8" rx="1" fill="white"/>
                <rect x="8.5" y="5" width="3" height="13" rx="1" fill="white"/>
                <rect x="15" y="2" width="3" height="16" rx="1" fill="white"/>
              </svg>
              <span>Dashboard</span>
            </button>
          </div>
        </div>
      </div>

      {cargando ? (
        <div className="loading-container">
          <p>Cargando datos...</p>
        </div>
      ) : error ? (
        <div className="error-container">
          <p>{error}</p>
        </div>
      ) : (
        <div className="videojuegos-container">
          {videojuegos.map((videojuego) => (
            <VideojuegoCard key={videojuego.id_videojuego} videojuego={videojuego} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Reportes;
