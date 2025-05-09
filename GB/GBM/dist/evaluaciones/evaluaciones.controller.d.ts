import { EvaluacionesService } from './evaluaciones.service';
import { ConsolidacionEvaluacionDto } from './dto/consolidacion-evaluacion.dto';
export declare class EvaluacionesController {
    private readonly evaluacionesService;
    constructor(evaluacionesService: EvaluacionesService);
    getConsolidacionesTodosVideojuegos(): Promise<ConsolidacionEvaluacionDto[]>;
    getConsolidacionEvaluacion(id_videojuego: number): Promise<ConsolidacionEvaluacionDto>;
    getEvaluacionesVideojuego(id_videojuego: number): Promise<{
        id_evaluacion: number;
        id_videojuego: number;
        id_jurado: number;
        comentario: string;
        jurado: {
            nombre: string;
            rol: string;
        };
        criterios: {
            id_criterio: number;
            nombre: string;
            valoracion: number;
        }[];
    }[]>;
    getJurados(): Promise<{
        id_usuario: number;
        nombre: string;
        rol: string;
    }[]>;
    getDashboard(): Promise<{
        title: string;
        consolidaciones: ConsolidacionEvaluacionDto[];
        rankingVideojuegos: ConsolidacionEvaluacionDto[];
        criterios: string[];
        progresoEvaluaciones: {
            id_videojuego: number;
            nombre_videojuego: string;
            jurados_evaluaron: number;
            total_jurados: number;
            porcentaje_completado: number;
        }[];
    }>;
    getDetalleEvaluacion(id: string): Promise<{
        title: string;
        id_videojuego: string;
    }>;
    getAnalytics(): Promise<{
        top3Videojuegos: {
            nombre: string;
            promedio: number;
            equipo: string;
        }[];
        distribucionPorMateria: {
            nrc: string;
            promedio: number;
            cantidad: number;
        }[];
    }>;
}
