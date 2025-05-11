import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
  Render,
  Res,
  Header,
} from '@nestjs/common';
import { EvaluacionesService } from './evaluaciones.service';
import { ConsolidacionEvaluacionDto } from './dto/consolidacion-evaluacion.dto';
import { Response } from 'express';
import * as ExcelJS from 'exceljs';

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

    const top3Videojuegos = [...consolidaciones]
      .sort((a, b) => b.promedio_total - a.promedio_total)
      .slice(0, 3)
      .map(vj => ({
        nombre: vj.nombre_videojuego,
        promedio: vj.promedio_total,
        equipo: vj.equipo,
      }));

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
@Get('exportar/excel')
@Header('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
@Header('Content-Disposition', 'attachment; filename=evaluaciones.xlsx')
async exportarExcel(@Res() res: Response) {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Evaluaciones');

  const evaluaciones = await this.evaluacionesService.obtenerEvaluacionesConDetalle();

  // Obtener todos los nombres únicos de criterios
  const todosLosCriterios = Array.from(
    new Set(evaluaciones.flatMap(ev => ev.criterios.map(c => c.nombre)))
  );

  // Encabezados
  const encabezados = [
    'Videojuego',
    'Jurado',
    ...todosLosCriterios,
    'Promedio',
    'Comentario',
    'Fecha',
  ];
  sheet.addRow(encabezados);

  // Estilo de encabezados
  sheet.getRow(1).eachCell((cell) => {
    cell.font = { bold: true };
    cell.alignment = { vertical: 'middle', horizontal: 'center' };
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFEFEFEF' },
    };
  });

  // Agregar filas de datos
  for (const ev of evaluaciones) {
    const fila = [ev.videojuegoNombre, ev.juradoNombre];

    for (const nombreCriterio of todosLosCriterios) {
      const criterio = ev.criterios.find(c => c.nombre === nombreCriterio);
      let valor = '';
      if (criterio && criterio.valoracion !== undefined && !isNaN(Number(criterio.valoracion))) {
        valor = parseFloat(criterio.valoracion).toFixed(2);
      }
      fila.push(valor);
    }

    const fechaFormateada = new Date(ev.fecha).toLocaleString();
    fila.push(ev.promedio, ev.comentario, fechaFormateada);

    sheet.addRow(fila);
  }

  // Autoajustar ancho de columnas
  sheet.columns.forEach((column) => {
    if (!column) return;
    let maxLength = 10;
    column.eachCell?.({ includeEmpty: true }, (cell) => {
      const text = cell.value ? cell.value.toString() : '';
      maxLength = Math.max(maxLength, text.length);
    });
    column.width = maxLength + 2;
  });

  const buffer = await workbook.xlsx.writeBuffer();
  res.end(buffer);
}
@Get('exportar/pdf')
@Header('Content-Type', 'application/pdf')
@Header('Content-Disposition', 'attachment; filename=evaluaciones.pdf')
async exportarPDF(@Res() res: Response) {
  const PDFDocument = require('pdfkit');
  const axios = require('axios');
  const fs = require('fs');
  const path = require('path');

  const doc = new PDFDocument({ margin: 30, size: 'A4' });
  doc.pipe(res);

  // Registrar fuente personalizada si existe
  const fontPath = path.join(__dirname, '..', 'assets', 'fonts', 'OpenSans-Regular.ttf');
  if (fs.existsSync(fontPath)) {
    doc.registerFont('OpenSans', fontPath);
    doc.font('OpenSans');
  }

  try {
    doc.fontSize(20).text('Reporte de Evaluaciones', { align: 'center' });
    doc.moveDown(2);

    const evaluaciones = await this.evaluacionesService.obtenerEvaluacionesConDetalle();
    const distribucion = await this.evaluacionesService.obtenerDistribucionPorMateria();

    // Detalle por evaluación
    for (const ev of evaluaciones) {
      doc
        .fontSize(12)
        .text(`Videojuego: ${ev.videojuegoNombre}`)
        .text(`Jurado: ${ev.juradoNombre}`);

      for (const criterio of ev.criterios) {
        doc.text(`   • ${criterio.nombre}: ${criterio.valoracion}`);
      }

      doc
        .text(`Promedio: ${ev.promedio}`)
        .text(`Comentario: ${ev.comentario || '-'}`)
        .text(`Fecha: ${new Date(ev.fecha).toLocaleString()}`)
        .moveDown(1.5);
    }

    doc.moveDown(1);

    // Top 3 videojuegos
    const ranking = [...evaluaciones]
      .sort((a, b) => parseFloat(b.promedio) - parseFloat(a.promedio))
      .slice(0, 3);

    doc.fontSize(16).text('Top 3 Videojuegos con Mejor Evaluación');
    doc.moveDown();

    ranking.forEach((r, i) => {
      doc.fontSize(12).text(`${i + 1}. ${r.videojuegoNombre} - Promedio: ${r.promedio}`);
    });

    doc.moveDown(2);

    // Gráfico de promedios
    try {
      const chartPromediosConfig = {
        type: 'bar',
        data: {
          labels: evaluaciones.map(e => e.videojuegoNombre),
          datasets: [{
            label: 'Promedio',
            data: evaluaciones.map(e => parseFloat(e.promedio)),
            backgroundColor: 'rgba(75, 192, 192, 0.7)',
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              max: 5,
              title: { display: true, text: 'Promedio' }
            }
          },
          plugins: {
            title: {
              display: true,
              text: 'Promedios por Videojuego'
            }
          }
        }
      };

      const chartUrl = `https://quickchart.io/chart?width=600&height=300&c=${encodeURIComponent(JSON.stringify(chartPromediosConfig))}`;
      const chartResponse = await axios.get(chartUrl, { responseType: 'arraybuffer' });

      if (chartResponse.data) {
        doc.fontSize(16).text('Gráfico: Promedios por Videojuego');
        doc.moveDown(0.5);
        doc.image(chartResponse.data, {
          fit: [500, 250],
          align: 'center',
          valign: 'center',
        });
        doc.moveDown(2);
      }
    } catch (error) {
      console.error('Error al cargar gráfico de promedios:', error.message);
      doc.fontSize(12).fillColor('red').text('❌ Error al cargar gráfico de promedios.');
    }

    // Gráfico o tabla de distribución por NRC
    if (Array.isArray(distribucion) && distribucion.length > 0) {
      try {
        const chartDistribucionConfig = {
          type: 'bar',
          data: {
            labels: distribucion.map(d => d.nrc),
            datasets: [
              {
                label: 'Promedio por NRC',
                data: distribucion.map(d => d.promedio),
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                yAxisID: 'y',
              },
              {
                label: 'Cantidad de Videojuegos',
                data: distribucion.map(d => d.cantidad),
                backgroundColor: 'rgba(255, 99, 132, 0.7)',
                yAxisID: 'y1',
              }
            ]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                position: 'left',
                max: 5,
                title: { display: true, text: 'Promedio' }
              },
              y1: {
                beginAtZero: true,
                position: 'right',
                grid: { drawOnChartArea: false },
                title: { display: true, text: 'Cantidad' }
              }
            },
            plugins: {
              title: {
                display: true,
                text: 'Distribución por Materia (NRC)',
              }
            }
          }
        };

        const distribucionUrl = `https://quickchart.io/chart?width=600&height=300&c=${encodeURIComponent(JSON.stringify(chartDistribucionConfig))}`;
        const distribucionChartResponse = await axios.get(distribucionUrl, { responseType: 'arraybuffer' });

        if (distribucionChartResponse.data) {
          doc.fontSize(16).text('Gráfico: Distribución por NRC');
          doc.moveDown(0.5);
          doc.image(distribucionChartResponse.data, {
            fit: [500, 250],
            align: 'center',
            valign: 'center',
          });
        }
      } catch (error) {
        console.error('Error al cargar gráfico NRC:', error.message);
        doc.fontSize(12).fillColor('red').text('❌ Error al cargar gráfico de distribución NRC.');
        doc.moveDown(1);
        doc.fontSize(14).fillColor('black').text('Tabla: Distribución por Materia (NRC)');
        distribucion.forEach(d => {
          doc.fontSize(12).text(`- ${d.nrc}: Promedio ${d.promedio}, Cantidad ${d.cantidad}`);
        });
      }
    } else {
      doc.fontSize(12).text('No hay datos de distribución por NRC para mostrar.');
    }

    doc.end();
  } catch (error) {
    console.error('Error general en exportarPDF:', error);
    doc.text('❌ Error generando el reporte PDF.');
    doc.end();
  }
}


}
