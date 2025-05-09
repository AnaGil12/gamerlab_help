import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ConsolidacionEvaluacionDto, CriterioEvaluadoDto } from './dto/consolidacion-evaluacion.dto';

@Injectable()
export class EvaluacionesService {
  constructor(private prisma: PrismaService) {}

  async consolidarEvaluaciones(id_videojuego: number): Promise<ConsolidacionEvaluacionDto> {

    // 1. Obtener el videojuego con su equipo
    const videojuego = await this.prisma.videojuego.findUnique({
      where: { id_videojuego },
      include: {
        equipo: {
          include: {
            integrante: {
              include: {
                integrante_nrc: {
                  include: {
                    nrc: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!videojuego) {
      throw new Error(`Videojuego con id ${id_videojuego} no encontrado`);
    }

    const nrcs = videojuego.equipo.integrante
      .flatMap(integrante => integrante.integrante_nrc)
      .map(integranteNrc => integranteNrc.nrc.codigo);


    // 2. Obtener todas las evaluaciones para el videojuego
    const evaluaciones = await this.prisma.evaluacion.findMany({
      where: {
        id_videojuegos: id_videojuego,
        estado: true,
      },
      include: {
        criterio_evaluacion: {
          include: {
            criterio: true,
          },
        },
        usuario: true,
      },
    });

    // 3. Agrupar criterios y calcular promedios
    const criteriosMap = new Map<number, CriterioEvaluadoDto>();
    
    // Procesar todas las evaluaciones y sus criterios
    evaluaciones.forEach(evaluacion => {
      evaluacion.criterio_evaluacion.forEach(criterioEval => {
        const idCriterio = criterioEval.id_criterio;
        
        if (!criteriosMap.has(idCriterio)) {
          criteriosMap.set(idCriterio, {
            id_criterio: idCriterio,
            nombre: criterioEval.criterio.nombre,
            descripcion: criterioEval.criterio.descripcion,
            promedio: 0,
            valoraciones: [],
          });
        }
        
        // Añadir valoración a la lista de valoraciones del criterio
        criteriosMap.get(idCriterio)!.valoraciones.push(criterioEval.valoracion);
      });
    });

    // Calcular promedio para cada criterio
    const criterios: CriterioEvaluadoDto[] = [];
    let sumaPromedios = 0;
    
    criteriosMap.forEach(criterio => {
      // Convertir valoraciones a números y calcular promedio
      const valoracionesNumericas = criterio.valoraciones.map(val => parseFloat(val));
      const promedio = valoracionesNumericas.reduce((a, b) => a + b, 0) / valoracionesNumericas.length;
      
      criterio.promedio = Number(promedio.toFixed(2));
      sumaPromedios += criterio.promedio;
      
      criterios.push(criterio);
    });

    // Calcular promedio total
    const promedioTotal = criterios.length > 0 
      ? Number((sumaPromedios / criterios.length).toFixed(2)) 
      : 0;

    return {
      id_videojuego: videojuego.id_videojuego,
      nombre_videojuego: videojuego.nombre,
      equipo: videojuego.equipo.nombre,
      criterios,
      promedio_total: promedioTotal,
      total_evaluaciones: evaluaciones.length,
      nrc: nrcs,
    };
  }

  async listarConsolidacionesVideojuegos(): Promise<ConsolidacionEvaluacionDto[]> {
    // Obtener todos los videojuegos activos
    const videojuegos = await this.prisma.videojuego.findMany({
      where: { estado: true },
      select: { id_videojuego: true }
    });

    // Consolidar evaluaciones para cada videojuego
    const consolidaciones = await Promise.all(
      videojuegos.map(vj => this.consolidarEvaluaciones(vj.id_videojuego))
    );

    return consolidaciones;
  }

  // Métodos adicionales para obtener evaluaciones individuales

  async obtenerEvaluacionesVideojuego(id_videojuego: number) {
    // Obtener evaluaciones para un videojuego específico
    const evaluaciones = await this.prisma.evaluacion.findMany({
      where: {
        id_videojuegos: id_videojuego,
        estado: true,
      },
      include: {
        usuario: true,
        criterio_evaluacion: {
          include: {
            criterio: true,
          },
        },
      },
    });

    // Transformar los datos para que sean más fáciles de usar en el cliente
    return evaluaciones.map(evaluacion => {
      return {
        id_evaluacion: evaluacion.id_evaluacion,
        id_videojuego: evaluacion.id_videojuegos,
        id_jurado: evaluacion.id_usuario,
        comentario: evaluacion.comentario || '',
        jurado: {
          nombre: `${evaluacion.usuario.primer_nombre} ${evaluacion.usuario.primer_apellido}`,
          rol: 'Jurado' // En un caso real, esto vendría de la base de datos
        },
        criterios: evaluacion.criterio_evaluacion.map(ce => {
          return {
            id_criterio: ce.id_criterio,
            nombre: ce.criterio.nombre,
            valoracion: parseFloat(ce.valoracion)
          };
        })
      };
    });
  }

  async obtenerJurados() {
    // Obtener usuarios con rol de jurado
    const usuarios = await this.prisma.usuario.findMany({
      where: {
        estado: true,
        // En un caso real, aquí filtrarías por rol de jurado
      },
      include: {
        usuario_rol: {
          include: {
            rol: true
          }
        }
      }
    });

    return usuarios.map(usuario => {
      return {
        id_usuario: usuario.id_usuario,
        nombre: `${usuario.primer_nombre} ${usuario.primer_apellido}`,
        rol: usuario.usuario_rol.length > 0 ? usuario.usuario_rol[0].rol.rol : 'Usuario'
      };
    });
  }
} 