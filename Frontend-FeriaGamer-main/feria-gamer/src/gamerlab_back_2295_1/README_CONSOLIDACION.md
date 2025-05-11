# Sistema de Consolidación de Evaluaciones para GamerLab

## Descripción Funcional
Esta funcionalidad implementa un sistema para consolidar las evaluaciones de los videojuegos creados por equipos de estudiantes. Permite obtener datos estadísticos sobre el rendimiento de cada proyecto según los criterios evaluados por los jurados.

## Requerimientos Implementados
La funcionalidad cumple con los requerimientos específicos:

### Para cada videojuego:
- ✅ Obtención de todas las evaluaciones realizadas por los jurados
- ✅ Cálculo de promedio por criterio
- ✅ Cálculo de promedio total

## Guía de Uso

### Accediendo a la Consolidación de Evaluaciones
1. **Vista General**: Accede a la URL base (`/`) para ver un listado de todos los videojuegos con sus evaluaciones consolidadas.
2. **Vista Detallada**: Haz clic en "Ver detalle completo" para acceder a la información detallada de un videojuego específico.

### API para Desarrolladores
Si necesitas acceder programáticamente a los datos de consolidación:

- **Listado completo de consolidaciones**:
  ```
  GET /evaluaciones/consolidacion
  ```

- **Consolidación de un videojuego específico**:
  ```
  GET /evaluaciones/consolidacion/:id_videojuego
  ```

## Estructura de Datos

### Modelo de Respuesta API
```typescript
// Respuesta para un videojuego específico
interface ConsolidacionEvaluacion {
  id_videojuego: number;
  nombre_videojuego: string;
  equipo: string;
  criterios: {
    id_criterio: number;
    nombre: string;
    descripcion: string;
    promedio: number;
    valoraciones: string[];
  }[];
  promedio_total: number;
  total_evaluaciones: number;
}
```

## Algoritmo de Consolidación

El sistema utiliza el siguiente proceso para consolidar las evaluaciones:

1. **Obtención de Datos**: Recopila todas las evaluaciones asociadas a un videojuego.
2. **Agrupación por Criterio**: Agrupa las valoraciones por cada criterio de evaluación.
3. **Cálculo de Promedios**:
   - Para cada criterio, calcula el promedio de las valoraciones numéricas.
   - Para el videojuego completo, calcula el promedio de todos los criterios.
4. **Presentación**: Organiza la información para su visualización o consumo por API.

## Implementación Técnica

### Componentes Principales
- **EvaluacionesService**: Implementa la lógica de consolidación.
- **EvaluacionesController**: Expone endpoints REST para acceder a los datos.
- **Vistas Web**: Interfaces HTML/JS para visualizar los resultados.

### Consideraciones Técnicas
- Los promedios se redondean a 2 decimales para mayor claridad.
- La vista principal muestra un resumen, limitando a 3 criterios para mejorar la experiencia del usuario.
- La vista detallada muestra todos los criterios evaluados.

## Ejemplo de Uso (Código)

### Consumiendo la API desde JavaScript
```javascript
// Obtener todas las consolidaciones
async function obtenerTodasLasConsolidaciones() {
  const response = await fetch('/evaluaciones/consolidacion');
  const data = await response.json();
  return data;
}

// Obtener consolidación de un videojuego específico
async function obtenerConsolidacionVideojuego(idVideojuego) {
  const response = await fetch(`/evaluaciones/consolidacion/${idVideojuego}`);
  const data = await response.json();
  return data;
}
``` 