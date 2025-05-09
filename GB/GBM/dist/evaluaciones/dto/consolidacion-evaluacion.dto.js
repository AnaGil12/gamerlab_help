"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsolidacionEvaluacionDto = exports.CriterioEvaluadoDto = void 0;
class CriterioEvaluadoDto {
    id_criterio;
    nombre;
    descripcion;
    promedio;
    valoraciones;
}
exports.CriterioEvaluadoDto = CriterioEvaluadoDto;
class ConsolidacionEvaluacionDto {
    id_videojuego;
    nombre_videojuego;
    equipo;
    criterios;
    promedio_total;
    total_evaluaciones;
    nrc;
}
exports.ConsolidacionEvaluacionDto = ConsolidacionEvaluacionDto;
//# sourceMappingURL=consolidacion-evaluacion.dto.js.map