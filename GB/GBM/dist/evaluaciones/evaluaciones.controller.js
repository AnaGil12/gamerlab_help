"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluacionesController = void 0;
const common_1 = require("@nestjs/common");
const evaluaciones_service_1 = require("./evaluaciones.service");
let EvaluacionesController = class EvaluacionesController {
    evaluacionesService;
    constructor(evaluacionesService) {
        this.evaluacionesService = evaluacionesService;
    }
    async getConsolidacionesTodosVideojuegos() {
        return this.evaluacionesService.listarConsolidacionesVideojuegos();
    }
    async getConsolidacionEvaluacion(id_videojuego) {
        return this.evaluacionesService.consolidarEvaluaciones(id_videojuego);
    }
    async getEvaluacionesVideojuego(id_videojuego) {
        return this.evaluacionesService.obtenerEvaluacionesVideojuego(id_videojuego);
    }
    async getJurados() {
        return this.evaluacionesService.obtenerJurados();
    }
    async getDashboard() {
        const consolidaciones = await this.evaluacionesService.listarConsolidacionesVideojuegos();
        const jurados = await this.evaluacionesService.obtenerJurados();
        const totalJurados = jurados.length;
        const ranking = [...consolidaciones].sort((a, b) => b.promedio_total - a.promedio_total);
        const criterios = Array.from(new Set(consolidaciones.flatMap(c => c.criterios.map(k => k.nombre))));
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
    async getDetalleEvaluacion(id) {
        return {
            title: 'Detalle de Evaluación',
            id_videojuego: id,
        };
    }
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
            if (!nrcs || nrcs.length === 0)
                return acc;
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
        }, {});
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
};
exports.EvaluacionesController = EvaluacionesController;
__decorate([
    (0, common_1.Get)('consolidacion'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EvaluacionesController.prototype, "getConsolidacionesTodosVideojuegos", null);
__decorate([
    (0, common_1.Get)('consolidacion/:id_videojuego'),
    __param(0, (0, common_1.Param)('id_videojuego', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EvaluacionesController.prototype, "getConsolidacionEvaluacion", null);
__decorate([
    (0, common_1.Get)('evaluaciones/:id_videojuego'),
    __param(0, (0, common_1.Param)('id_videojuego', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EvaluacionesController.prototype, "getEvaluacionesVideojuego", null);
__decorate([
    (0, common_1.Get)('jurados'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EvaluacionesController.prototype, "getJurados", null);
__decorate([
    (0, common_1.Get)('dashboard'),
    (0, common_1.Render)('dashboard'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EvaluacionesController.prototype, "getDashboard", null);
__decorate([
    (0, common_1.Get)('detalle'),
    (0, common_1.Render)('evaluacion-detalle'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EvaluacionesController.prototype, "getDetalleEvaluacion", null);
__decorate([
    (0, common_1.Get)('analytics'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EvaluacionesController.prototype, "getAnalytics", null);
exports.EvaluacionesController = EvaluacionesController = __decorate([
    (0, common_1.Controller)('evaluaciones'),
    __metadata("design:paramtypes", [evaluaciones_service_1.EvaluacionesService])
], EvaluacionesController);
//# sourceMappingURL=evaluaciones.controller.js.map