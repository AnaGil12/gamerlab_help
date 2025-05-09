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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluacionesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let EvaluacionesService = class EvaluacionesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async consolidarEvaluaciones(id_videojuego) {
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
        const criteriosMap = new Map();
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
                criteriosMap.get(idCriterio).valoraciones.push(criterioEval.valoracion);
            });
        });
        const criterios = [];
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
    async listarConsolidacionesVideojuegos() {
        const videojuegos = await this.prisma.videojuego.findMany({
            where: { estado: true },
            select: { id_videojuego: true }
        });
        const consolidaciones = await Promise.all(videojuegos.map(vj => this.consolidarEvaluaciones(vj.id_videojuego)));
        return consolidaciones;
    }
    async obtenerEvaluacionesVideojuego(id_videojuego) {
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
                    rol: 'Jurado'
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
        const usuarios = await this.prisma.usuario.findMany({
            where: {
                estado: true,
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
};
exports.EvaluacionesService = EvaluacionesService;
exports.EvaluacionesService = EvaluacionesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EvaluacionesService);
//# sourceMappingURL=evaluaciones.service.js.map