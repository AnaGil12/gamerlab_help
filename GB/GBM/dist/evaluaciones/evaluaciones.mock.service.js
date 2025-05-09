"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluacionesMockService = void 0;
const common_1 = require("@nestjs/common");
let EvaluacionesMockService = class EvaluacionesMockService {
    videojuegos = [
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
    jurados = [
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
    evaluaciones = [
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
    async consolidarEvaluaciones(id_videojuego) {
        const videojuego = this.videojuegos.find(vj => vj.id_videojuego === id_videojuego);
        if (!videojuego) {
            throw new Error(`Videojuego con id ${id_videojuego} no encontrado`);
        }
        return videojuego;
    }
    async listarConsolidacionesVideojuegos() {
        return this.videojuegos;
    }
    async obtenerEvaluacionesVideojuego(id_videojuego) {
        const evaluacionesVideojuego = this.evaluaciones.filter(ev => ev.id_videojuego === id_videojuego);
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
};
exports.EvaluacionesMockService = EvaluacionesMockService;
exports.EvaluacionesMockService = EvaluacionesMockService = __decorate([
    (0, common_1.Injectable)()
], EvaluacionesMockService);
//# sourceMappingURL=evaluaciones.mock.service.js.map