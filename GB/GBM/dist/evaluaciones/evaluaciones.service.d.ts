import { PrismaService } from '../prisma/prisma.service';
import { ConsolidacionEvaluacionDto } from './dto/consolidacion-evaluacion.dto';
export declare class EvaluacionesService {
    private prisma;
    constructor(prisma: PrismaService);
    consolidarEvaluaciones(id_videojuego: number): Promise<ConsolidacionEvaluacionDto>;
    listarConsolidacionesVideojuegos(): Promise<ConsolidacionEvaluacionDto[]>;
    obtenerEvaluacionesVideojuego(id_videojuego: number): Promise<{
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
    obtenerJurados(): Promise<{
        id_usuario: number;
        nombre: string;
        rol: string;
    }[]>;
}
