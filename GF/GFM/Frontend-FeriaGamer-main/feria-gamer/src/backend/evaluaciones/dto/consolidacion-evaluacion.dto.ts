export class CriterioEvaluadoDto {
  id_criterio: number;
  nombre: string;
  descripcion: string;
  promedio: number;
  valoraciones: string[];
}

export class ConsolidacionEvaluacionDto {
  id_videojuego: number;
  nombre_videojuego: string;
  equipo: string;
  criterios: CriterioEvaluadoDto[];
  promedio_total: number;
  total_evaluaciones: number;
  nrc: string[];
} 