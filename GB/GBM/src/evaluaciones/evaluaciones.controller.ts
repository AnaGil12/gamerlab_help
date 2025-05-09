import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
  Render,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { EvaluacionesService } from './evaluaciones.service';
import { ConsolidacionEvaluacionDto } from './dto/consolidacion-evaluacion.dto';
import { Response } from 'express';

@Controller('evaluaciones')
export class EvaluacionesController {
  constructor(private readonly evaluacionesService: EvaluacionesService) {}

  @Get('consolidacion')
  async getConsolidacionesTodosVideojuegos(): Promise<ConsolidacionEvaluacionDto[]> {
    return this.evaluacionesService.listarConsolidacionesVideojuegos();
  }

  @Get('consolidacion/:id_videojuego')
  async getConsolidacionEvaluacion(
    @Param('id_videojuego', ParseIntPipe) id_videojuego: number
  ): Promise<ConsolidacionEvaluacionDto> {
    return this.evaluacionesService.consolidarEvaluaciones(id_videojuego);
  }

  @Get('evaluaciones/:id_videojuego')
  async getEvaluacionesVideojuego(
    @Param('id_videojuego', ParseIntPipe) id_videojuego: number
  ) {
    return this.evaluacionesService.obtenerEvaluacionesVideojuego(id_videojuego);
  }

  @Get('jurados')
  async getJurados() {
    return this.evaluacionesService.obtenerJurados();
  }

  @Get('dashboard')
  @Render('dashboard')
  async getDashboard() {
    const consolidaciones = await this.evaluacionesService.listarConsolidacionesVideojuegos();
    const jurados = await this.evaluacionesService.obtenerJurados();

    const totalJurados = jurados.length;
    const ranking = [...consolidaciones].sort((a, b) => b.promedio_total - a.promedio_total);

    const criterios = Array.from(
      new Set(consolidaciones.flatMap(c => c.criterios.map(k => k.nombre)))
    );

    const progreso = consolidaciones.map(c => ({
      id_videojuego: c.id_videojuego,
      nombre_videojuego: c.nombre_videojuego,
      jurados_evaluaron: c.total_evaluaciones,
      total_jurados: totalJurados,
      porcentaje_completado: Math.round((c.total_evaluaciones / totalJurados) * 100),
    }));

    return {
      title: 'Dashboard de Evaluaciones',
      consolidaciones,
      rankingVideojuegos: ranking,
      criterios,
      progresoEvaluaciones: progreso,
    };
  }

  @Get('detalle')
  @Render('evaluacion-detalle')
  async getDetalleEvaluacion(@Query('id') id: string) {
    return {
      title: 'Detalle de Evaluación',
      id_videojuego: id,
    };
  }
  @Get('analytics')
  async getAnalytics() {
  const consolidaciones = await this.evaluacionesService.listarConsolidacionesVideojuegos();

  // Top 3 videojuegos con datos reales
  const top3Videojuegos = [...consolidaciones]
    .sort((a, b) => b.promedio_total - a.promedio_total)
    .slice(0, 3)
    .map(vj => ({
      nombre: vj.nombre_videojuego,
      promedio: vj.promedio_total,
      equipo: vj.equipo,
    }));

  // Agrupación real por NRC
  const materiasAgrupadas = consolidaciones.reduce((acc, curr) => {
    const nrcs = curr.nrc; // Ahora es un array de strings

    if (!nrcs || nrcs.length === 0) return acc; // Omitir si no hay NRCs

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

  const distribucionPorMateria = Object.values(materiasAgrupadas).map(grupo => ({
    nrc: grupo.nrc,
    promedio: +(grupo.promedioSum / grupo.cantidad).toFixed(2),
    cantidad: grupo.cantidad,
  }));

  return {
    top3Videojuegos,
    distribucionPorMateria,
  };
  }
}
