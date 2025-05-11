import { Injectable } from '@nestjs/common';
import { ConsolidacionEvaluacionDto, CriterioEvaluadoDto } from './dto/consolidacion-evaluacion.dto';

@Injectable()
export class EvaluacionesMockService {
  // Datos de ejemplo para pruebas
  private videojuegos = [
    {
      id_videojuego: 1,
      nombre_videojuego: 'Space Adventure',
      equipo: 'Game Masters',
      criterios: [
        {
          id_criterio: 1,
          nombre: 'Interfaz de Usuario',
          descripcion: 'Diseño, colores, usabilidad',
          promedio: 4.5,
          valoraciones: ['5', '4']
        },
        {
          id_criterio: 2,
          nombre: 'Interacción',
          descripcion: 'Controles, guía al usuario, intuitividad',
          promedio: 4.0,
          valoraciones: ['4', '4']
        },
        {
          id_criterio: 3,
          nombre: 'Resultados',
          descripcion: 'Reacciones, recompensas, retroalimentación visual',
          promedio: 3.5,
          valoraciones: ['3', '4']
        },
        {
          id_criterio: 4,
          nombre: 'Presentación del Proyecto',
          descripcion: 'Claridad, coherencia, comunicación del objetivo',
          promedio: 4.0,
          valoraciones: ['4', '4']
        },
        {
          id_criterio: 5,
          nombre: 'Funcionamiento del Programa',
          descripcion: 'Que no tenga errores y cumpla su propósito',
          promedio: 4.5,
          valoraciones: ['5', '4']
        },
        {
          id_criterio: 6,
          nombre: 'Presentación personal del equipo',
          descripcion: 'Lenguaje corporal, presencia, orden y seguridad al exponer',
          promedio: 4.0,
          valoraciones: ['4', '4']
        }
      ],
      promedio_total: 4.08,
      total_evaluaciones: 2
    },
    {
      id_videojuego: 2,
      nombre_videojuego: 'Dungeon Escape',
      equipo: 'Pixel Warriors',
      criterios: [
        {
          id_criterio: 1,
          nombre: 'Interfaz de Usuario',
          descripcion: 'Diseño, colores, usabilidad',
          promedio: 3.5,
          valoraciones: ['3', '4']
        },
        {
          id_criterio: 2,
          nombre: 'Interacción',
          descripcion: 'Controles, guía al usuario, intuitividad',
          promedio: 4.5,
          valoraciones: ['5', '4']
        },
        {
          id_criterio: 3,
          nombre: 'Resultados',
          descripcion: 'Reacciones, recompensas, retroalimentación visual',
          promedio: 5.0,
          valoraciones: ['5', '5']
        },
        {
          id_criterio: 4,
          nombre: 'Presentación del Proyecto',
          descripcion: 'Claridad, coherencia, comunicación del objetivo',
          promedio: 4.0,
          valoraciones: ['4', '4']
        },
        {
          id_criterio: 5,
          nombre: 'Funcionamiento del Programa',
          descripcion: 'Que no tenga errores y cumpla su propósito',
          promedio: 3.5,
          valoraciones: ['3', '4']
        },
        {
          id_criterio: 6,
          nombre: 'Presentación personal del equipo',
          descripcion: 'Lenguaje corporal, presencia, orden y seguridad al exponer',
          promedio: 4.5,
          valoraciones: ['5', '4']
        }
      ],
      promedio_total: 4.17,
      total_evaluaciones: 2
    }
  ];

  // Información de jurados
  private jurados = [
    {
      id_usuario: 1,
      nombre: 'Juan Gómez',
      rol: 'Jurado Principal'
    },
    {
      id_usuario: 2,
      nombre: 'María Sánchez',
      rol: 'Jurado Técnico'
    }
  ];

  // Evaluaciones individuales
  private evaluaciones = [
    // Evaluaciones para Space Adventure
    {
      id_evaluacion: 1,
      id_videojuego: 1,
      id_jurado: 1,
      comentario: "Buen diseño visual, pero puede mejorar la retroalimentación al usuario",
      criterios: [
        { id_criterio: 1, valoracion: 5 },
        { id_criterio: 2, valoracion: 4 },
        { id_criterio: 3, valoracion: 3 },
        { id_criterio: 4, valoracion: 4 },
        { id_criterio: 5, valoracion: 5 },
        { id_criterio: 6, valoracion: 4 }
      ]
    },
    {
      id_evaluacion: 2,
      id_videojuego: 1,
      id_jurado: 2,
      comentario: "Interfaz atractiva, controles intuitivos pero faltan indicaciones claras",
      criterios: [
        { id_criterio: 1, valoracion: 4 },
        { id_criterio: 2, valoracion: 4 },
        { id_criterio: 3, valoracion: 4 },
        { id_criterio: 4, valoracion: 4 },
        { id_criterio: 5, valoracion: 4 },
        { id_criterio: 6, valoracion: 4 }
      ]
    },
    
    // Evaluaciones para Dungeon Escape
    {
      id_evaluacion: 3,
      id_videojuego: 2,
      id_jurado: 1,
      comentario: "Mecánicas de juego excelentes, pero la interfaz podría ser más intuitiva",
      criterios: [
        { id_criterio: 1, valoracion: 3 },
        { id_criterio: 2, valoracion: 5 },
        { id_criterio: 3, valoracion: 5 },
        { id_criterio: 4, valoracion: 4 },
        { id_criterio: 5, valoracion: 3 },
        { id_criterio: 6, valoracion: 5 }
      ]
    },
    {
      id_evaluacion: 4,
      id_videojuego: 2,
      id_jurado: 2,
      comentario: "Buen sistema de recompensas, pero algunos errores menores en la ejecución",
      criterios: [
        { id_criterio: 1, valoracion: 4 },
        { id_criterio: 2, valoracion: 4 },
        { id_criterio: 3, valoracion: 5 },
        { id_criterio: 4, valoracion: 4 },
        { id_criterio: 5, valoracion: 4 },
        { id_criterio: 6, valoracion: 4 }
      ]
    }
  ];

  async consolidarEvaluaciones(id_videojuego: number): Promise<ConsolidacionEvaluacionDto> {
    const videojuego = this.videojuegos.find(vj => vj.id_videojuego === id_videojuego);
    if (!videojuego) {
      throw new Error(`Videojuego con id ${id_videojuego} no encontrado`);
    }
    return videojuego as ConsolidacionEvaluacionDto;
  }

  async listarConsolidacionesVideojuegos(): Promise<ConsolidacionEvaluacionDto[]> {
    return this.videojuegos as ConsolidacionEvaluacionDto[];
  }

  async obtenerEvaluacionesVideojuego(id_videojuego: number) {
    const evaluacionesVideojuego = this.evaluaciones.filter(ev => ev.id_videojuego === id_videojuego);
    
    // Enriquecer con datos de jurados
    return evaluacionesVideojuego.map(ev => {
      const jurado = this.jurados.find(j => j.id_usuario === ev.id_jurado);
      return {
        ...ev,
        jurado: jurado ? {
          nombre: jurado.nombre,
          rol: jurado.rol
        } : null
      };
    });
  }

  async obtenerJurados() {
    return this.jurados;
  }
} 