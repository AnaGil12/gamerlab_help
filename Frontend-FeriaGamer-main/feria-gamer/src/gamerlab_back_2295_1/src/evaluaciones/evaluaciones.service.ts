import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ConsolidacionEvaluacionDto, CriterioEvaluadoDto } from './dto/consolidacion-evaluacion.dto';

@Injectable()
export class EvaluacionesService {
  constructor(private prisma: PrismaService) {}

  async consolidarEvaluaciones(id_videojuego: number): Promise<ConsolidacionEvaluacionDto> {
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

    const criteriosMap = new Map<number, CriterioEvaluadoDto>();

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

        criteriosMap.get(idCriterio)!.valoraciones.push(criterioEval.valoracion);
      });
    });

    const criterios: CriterioEvaluadoDto[] = [];
    let sumaPromedios = 0;

    criteriosMap.forEach(criterio => {
      const valoracionesNumericas = criterio.valoraciones.map(val => parseFloat(val));
      const promedio = valoracionesNumericas.reduce((a, b) => a + b, 0) / valoracionesNumericas.length;

      criterio.promedio = Number(promedio.toFixed(2));
      sumaPromedios += criterio.promedio;

      criterios.push(criterio);
    });

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
    const videojuegos = await this.prisma.videojuego.findMany({
      where: { estado: true },
      select: { id_videojuego: true }
    });

    const consolidaciones = await Promise.all(
      videojuegos.map(vj => this.consolidarEvaluaciones(vj.id_videojuego))
    );

    return consolidaciones;
  }

  async obtenerEvaluacionesVideojuego(id_videojuego: number) {
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

    return evaluaciones.map(evaluacion => {
      return {
        id_evaluacion: evaluacion.id_evaluacion,
        id_videojuego: evaluacion.id_videojuegos,
        id_jurado: evaluacion.id_usuario,
        comentario: evaluacion.comentario || '',
        jurado: {
          nombre: `${evaluacion.usuario.primer_nombre} ${evaluacion.usuario.primer_apellido}`,
          rol: 'Jurado',
        },
        criterios: evaluacion.criterio_evaluacion.map(ce => ({
          id_criterio: ce.id_criterio,
          nombre: ce.criterio.nombre,
          valoracion: parseFloat(ce.valoracion),
        })),
      };
    });
  }

  async obtenerJurados() {
    const usuarios = await this.prisma.usuario.findMany({
      where: {
        estado: true,
      },
      include: {
        usuario_rol: {
          include: {
            rol: true,
          },
        },
      },
    });

    return usuarios.map(usuario => ({
      id_usuario: usuario.id_usuario,
      nombre: `${usuario.primer_nombre} ${usuario.primer_apellido}`,
      rol: usuario.usuario_rol.length > 0 ? usuario.usuario_rol[0].rol.rol : 'Usuario',
    }));
  }

  async obtenerEvaluacionesConDetalle() {
    const evaluaciones = await this.prisma.evaluacion.findMany({
      where: {
        estado: true,
      },
      include: {
        videojuego: {
          select: { nombre: true },
        },
        usuario: {
          select: { primer_nombre: true, primer_apellido: true },
        },
        criterio_evaluacion: {
          include: {
            criterio: {
              select: { nombre: true },
            },
          },
        },
      },
    });

    return evaluaciones.map(ev => {
      const criterios = ev.criterio_evaluacion.map(ce => ({
        nombre: ce.criterio.nombre,
        valoracion: ce.valoracion,
      }));

      const promedio = criterios.length > 0
        ? criterios.reduce((sum, c) => sum + parseFloat(c.valoracion), 0) / criterios.length
        : 0;

      return {
        videojuegoNombre: ev.videojuego.nombre,
        juradoNombre: `${ev.usuario.primer_nombre} ${ev.usuario.primer_apellido}`,
        criterios,
        promedio: promedio.toFixed(2),
        comentario: ev.comentario || '',
        fecha: ev.fecha_creacion,
      };
    });
  }
  async obtenerDistribucionPorMateria() {
  const consolidaciones = await this.listarConsolidacionesVideojuegos();

  const materiasAgrupadas = consolidaciones.reduce((acc, curr) => {
    const nrcs = curr.nrc;
    if (!nrcs || nrcs.length === 0) return acc;

    nrcs.forEach(nrc => {
      if (!acc[nrc]) {
        acc[nrc] = {
          nrc: `NRC ${nrc}`,
          promedioSum: 0,
          cantidad: 0,
        };
      }

      acc[nrc].promedioSum += curr.promedio_total;
      acc[nrc].cantidad += 1;
    });

    return acc;
  }, {} as Record<string, { nrc: string; promedioSum: number; cantidad: number }>);

  return Object.values(materiasAgrupadas).map(grupo => ({
    nrc: grupo.nrc,
    promedio: +(grupo.promedioSum / grupo.cantidad).toFixed(2),
    cantidad: grupo.cantidad,
  }));
}

}