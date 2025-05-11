import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/EstadisticasIndividuales.css';

interface CriterioEvaluado {
  id_criterio: number;
  nombre: string;
  descripcion: string;
  promedio: number;
  evaluaciones: {
    id_jurado: number;
    nombre_jurado: string;
    puntuacion: number;
    comentario?: string;
  }[];
}

interface DetalleVideojuego {
  id_videojuego: number;
  nombre_videojuego: string;
  equipo: string;
  criterios: CriterioEvaluado[];
  promedio_total: number;
  total_evaluaciones: number;
  nrc: string[];
  descripcion?: string;
  fecha_evaluacion?: string;
}

const criteriosDefinidos = [
  {
    id_criterio: 1,
    nombre: "Interfaz de Usuario",
    descripcion: "Diseño, colores, usabilidad"
  },
  {
    id_criterio: 2,
    nombre: "Interacción",
    descripcion: "Controles, guía al usuario, intuitividad"
  },
  {
    id_criterio: 3,
    nombre: "Resultados",
    descripcion: "Reacciones, recompensas, retroalimentación visual"
  },
  {
    id_criterio: 4,
    nombre: "Presentación del Proyecto",
    descripcion: "Claridad, coherencia, comunicación del objetivo"
  },
  {
    id_criterio: 5,
    nombre: "Funcionamiento del Programa",
    descripcion: "Que no tenga errores y cumpla su propósito"
  },
  {
    id_criterio: 6,
    nombre: "Presentación personal del equipo",
    descripcion: "Lenguaje corporal, presencia, orden y seguridad al exponer"
  }
];

const EstadisticasIndividuales: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [videojuego, setVideojuego] = useState<DetalleVideojuego | null>(null);
  const [cargando, setCargando] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Estados para las pestañas
  const [pestanaIzquierda, setPestanaIzquierda] = useState<'barras' | 'radar'>('barras');
  const [pestanaDerecha, setPestanaDerecha] = useState<'evaluaciones' | 'graficos'>('evaluaciones');

  useEffect(() => {
    const obtenerDetalles = async () => {
      try {
        // Simulamos datos para la demostración
        setTimeout(() => {
          const criterios: CriterioEvaluado[] = criteriosDefinidos.map((c, idx) => ({
            ...c,
            promedio: 4 + (Math.random() * 1),
            evaluaciones: [
              { id_jurado: 1, nombre_jurado: "Ana Gómez", puntuacion: 4 + Math.random(), comentario: `Comentario de Ana sobre ${c.nombre}` },
              { id_jurado: 2, nombre_jurado: "Carlos Ruiz", puntuacion: 4 + Math.random(), comentario: `Comentario de Carlos sobre ${c.nombre}` },
              { id_jurado: 3, nombre_jurado: "María López", puntuacion: 4 + Math.random(), comentario: `Comentario de María sobre ${c.nombre}` }
            ]
          }));
          const promedio_total = criterios.reduce((acc, c) => acc + c.promedio, 0) / criterios.length;
          const datosSimulados: DetalleVideojuego = {
            id_videojuego: parseInt(id || '0'),
            nombre_videojuego: "Space Explorer",
            equipo: "Equipo Alfa",
            descripcion: "Juego de exploración espacial con elementos de supervivencia y construcción",
            fecha_evaluacion: "2023-05-10",
            criterios,
            promedio_total,
            total_evaluaciones: 3,
            nrc: ["12345"]
          };
          setVideojuego(datosSimulados);
          setCargando(false);
        }, 500);
        
        // En producción, usar esto:
        // const response = await axios.get(`/api/evaluaciones/videojuego/${id}`);
        // setVideojuego(response.data);
        // setCargando(false);
      } catch (err) {
        setError("Error al cargar los datos del videojuego");
        setCargando(false);
        console.error("Error al obtener detalles:", err);
      }
    };

    obtenerDetalles();
  }, [id]);

  // Función para generar los puntos del radar para SVG
  const getRadarPoints = (criterios: CriterioEvaluado[], radioMax = 100, cx = 125, cy = 125) => {
    const total = criterios.length;
    return criterios.map((criterio, i) => {
      const angle = (Math.PI * 2 * i) / total - Math.PI / 2;
      const radio = (criterio.promedio / 5) * radioMax;
      const x = cx + Math.cos(angle) * radio;
      const y = cy + Math.sin(angle) * radio;
      return { x, y };
    });
  };

  // Función para obtener los criterios a graficar (siempre 6)
  const criteriosParaGraficos = videojuego
    ? criteriosDefinidos.map(def => {
        const encontrado = videojuego.criterios.find(c => c.id_criterio === def.id_criterio);
        return {
          ...def,
          promedio: encontrado ? encontrado.promedio : 0,
          evaluaciones: encontrado ? encontrado.evaluaciones : [],
        };
      })
    : [];

  if (cargando) {
    return (
      <div className="estadisticas-container">
        <div className="loading-container">
          <p>Cargando datos...</p>
        </div>
      </div>
    );
  }

  if (error || !videojuego) {
    return (
      <div className="estadisticas-container">
        <div className="error-container">
          <p>{error || "No se encontró el videojuego"}</p>
          <Link to="/reportes" className="btn btn-primary">Volver a Reportes</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="estadisticas-container">
      <div className="estadisticas-header">
        <div>
          <Link to="/reportes" className="volver-link">
            ← Volver a Reportes
          </Link>
          <h1>{videojuego.nombre_videojuego}</h1>
          <p className="equipo-info">Equipo: {videojuego.equipo} | NRC: {videojuego.nrc.join(', ')}</p>
        </div>
      </div>

      {/* Grid de tres secciones */}
      <div className="secciones-grid">
        {/* Sección 1: Gráficos (Barras y Radar) */}
        <div className="seccion seccion-1">
          <div className="tabs">
            <button 
              className={`tab ${pestanaIzquierda === 'barras' ? 'active' : ''}`}
              onClick={() => setPestanaIzquierda('barras')}
            >
              Gráfico de Barras
            </button>
            <button 
              className={`tab ${pestanaIzquierda === 'radar' ? 'active' : ''}`}
              onClick={() => setPestanaIzquierda('radar')}
            >
              Gráfico Radar
            </button>
          </div>
          
          <div className="tab-content">
            {pestanaIzquierda === 'barras' ? (
              <div className="grafico-container">
                <div className="placeholder-grafico">
                  <h3>Promedios por Criterio</h3>
                  <p>Gráfico de barras mostrando los promedios de cada criterio evaluado</p>
                  
                  {/* Gráfico de barras vertical */}
                  <div className="grafico-barras-vertical">
                    {criteriosParaGraficos.map((criterio, index) => (
                      <div key={criterio.id_criterio} className="barra-vertical-container" style={{ width: '14%' }}>
                        <div 
                          className="barra-vertical" 
                          style={{ 
                            height: `${criterio.promedio * 40}px`,
                            backgroundColor: `hsl(${280 - index * 15}, 70%, 60%)`
                          }}
                        >
                          <span className="barra-vertical-valor">{criterio.promedio.toFixed(1)}</span>
                        </div>
                        <div className="barra-vertical-nombre" title={criterio.nombre}>
                          {criterio.nombre.split(' ')[0]}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="banner-promedio-general">
                    Promedio general: <span className="valor-promedio-general">{videojuego.promedio_total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grafico-container">
                <div className="placeholder-grafico">
                  <h3>Análisis Radar</h3>
                  <p>Gráfico radar mostrando el balance entre criterios evaluados</p>
                  
                  {/* Gráfico radar mejorado */}
                  <div className="grafico-radar-simulado">
                    <svg width={250} height={250}>
                      {/* Círculos de fondo */}
                      {[1, 2, 3, 4].map((n) => (
                        <circle
                          key={n}
                          cx={125}
                          cy={125}
                          r={n * 25}
                          fill="none"
                          stroke="#ddd"
                          strokeDasharray="4 4"
                        />
                      ))}
                      {/* Ejes */}
                      {criteriosParaGraficos.map((criterio, i) => {
                        const angle = (Math.PI * 2 * i) / criteriosParaGraficos.length - Math.PI / 2;
                        const x = 125 + Math.cos(angle) * 100;
                        const y = 125 + Math.sin(angle) * 100;
                        return <line key={criterio.id_criterio} x1={125} y1={125} x2={x} y2={y} stroke="#bbb" />;
                      })}
                      {/* Área poligonal */}
                      <polygon
                        points={getRadarPoints(criteriosParaGraficos).map(p => `${p.x},${p.y}`).join(' ')}
                        fill="rgba(138,43,226,0.18)"
                        stroke="#8a2be2"
                        strokeWidth={2}
                      />
                      {/* Puntos y etiquetas */}
                      {getRadarPoints(criteriosParaGraficos).map((p, i) => (
                        <g key={i}>
                          <circle cx={p.x} cy={p.y} r={7} fill={`hsl(${280 - i * 15}, 70%, 60%)`} />
                          <text
                            x={125 + Math.cos((Math.PI * 2 * i) / criteriosParaGraficos.length - Math.PI / 2) * 120}
                            y={125 + Math.sin((Math.PI * 2 * i) / criteriosParaGraficos.length - Math.PI / 2) * 120}
                            textAnchor="middle"
                            alignmentBaseline="middle"
                            fontSize={11}
                            fill="#333"
                            style={{ fontWeight: 500 }}
                          >
                            {criteriosParaGraficos[i].nombre.split(' ')[0]}
                          </text>
                        </g>
                      ))}
                    </svg>
                    {/* Leyenda */}
                    <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                      {criteriosParaGraficos.map((criterio, index) => (
                        <div key={criterio.id_criterio} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <div style={{
                            width: '12px',
                            height: '12px',
                            backgroundColor: `hsl(${280 - index * 15}, 70%, 60%)`,
                            borderRadius: '50%'
                          }}></div>
                          <span style={{ fontSize: '12px' }}>{criterio.nombre}: {criterio.promedio.toFixed(1)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Sección 2: Criterios */}
        <div className="seccion seccion-2">
          <div className="tab-content">
            <h3>Criterios evaluados</h3>
            <table className="tabla-criterios">
              <thead>
                <tr>
                  <th>Criterio</th>
                  <th>Descripción</th>
                  <th>Promedio</th>
                </tr>
              </thead>
              <tbody>
                {criteriosParaGraficos.map((criterio) => (
                  <tr key={criterio.id_criterio}>
                    <td>{criterio.nombre}</td>
                    <td>{criterio.descripcion}</td>
                    <td><span className="badge-promedio">{criterio.promedio.toFixed(1)}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Sección 3: Evaluaciones individuales */}
        <div className="seccion seccion-3">
          <div className="tabs">
            <button 
              className={`tab active`}
              style={{ cursor: 'default' }}
            >
              Evaluaciones individuales
            </button>
          </div>
          <div className="tab-content">
            <div>
              <h3>Evaluaciones de los jurados</h3>
              {['Ana Gómez', 'Carlos Ruiz', 'María López'].map((nombreJurado, idx) => {
                const comentarioGeneral = `Comentario general de ${nombreJurado} sobre el videojuego.`;
                return (
                  <div key={nombreJurado} className="bloque-jurado">
                    <div className="nombre-jurado">{nombreJurado}</div>
                    <div className="comentario-general-jurado">{comentarioGeneral}</div>
                    <table className="tabla-criterios tabla-jurado">
                      <thead>
                        <tr>
                          <th>Criterio</th>
                          <th>Descripción</th>
                          <th>Valoración</th>
                        </tr>
                      </thead>
                      <tbody>
                        {criteriosParaGraficos.map((criterio) => {
                          const evaluacion = criterio.evaluaciones[idx];
                          const valor = evaluacion ? evaluacion.puntuacion : 0;
                          let badgeClass = 'badge-promedio';
                          if (valor >= 4) badgeClass += ' badge-verde';
                          else if (valor === 3) badgeClass += ' badge-amarillo';
                          else badgeClass += ' badge-rojo';
                          return (
                            <tr key={criterio.id_criterio}>
                              <td>{criterio.nombre}</td>
                              <td>{criterio.descripcion}</td>
                              <td><span className={badgeClass}>{valor.toFixed(1)}</span></td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstadisticasIndividuales; 