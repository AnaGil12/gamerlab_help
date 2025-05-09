import { ConsolidacionEvaluacionDto } from './dto/consolidacion-evaluacion.dto';
export declare class EvaluacionesMockService {
    private videojuegos;
    private jurados;
    private evaluaciones;
    consolidarEvaluaciones(id_videojuego: number): Promise<ConsolidacionEvaluacionDto>;
    listarConsolidacionesVideojuegos(): Promise<ConsolidacionEvaluacionDto[]>;
    obtenerEvaluacionesVideojuego(id_videojuego: number): Promise<{
        jurado: {
            nombre: string;
            rol: string;
        } | null;
        id_evaluacion: number;
        id_videojuego: number;
        id_jurado: number;
        comentario: string;
        criterios: {
            id_criterio: number;
            valoracion: number;
        }[];
    }[]>;
    obtenerJurados(): Promise<{
        id_usuario: number;
        nombre: string;
        rol: string;
    }[]>;
}
