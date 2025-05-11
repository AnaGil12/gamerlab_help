# Implementación de Consolidación de Evaluaciones para GamerLab

## Descripción
Se ha implementado un sistema para consolidar las evaluaciones de videojuegos desarrollados por equipos de estudiantes. El sistema permite obtener todas las evaluaciones realizadas por jurados, calcular promedios por criterio y calcular el promedio total de cada videojuego.

## Funcionalidades Implementadas

### 1. Consolidación de Evaluaciones
- **Para cada videojuego:**
  - Obtención de todas las evaluaciones realizadas por los jurados
  - Cálculo de promedio por criterio
  - Cálculo de promedio total

### 2. Interfaz Web Simple
- **Listado de Videojuegos con Evaluaciones Consolidadas:**
  - Muestra todos los videojuegos con sus promedios
  - Visualiza los 3 primeros criterios (para simplificar la vista principal)
  - Indica el número total de evaluaciones
  
- **Vista Detallada de Evaluación:**
  - Muestra información completa del videojuego
  - Lista todos los criterios con sus respectivos promedios
  - Muestra el promedio total y el número de evaluaciones

## Estructura Técnica

### Backend (NestJS)
- **Módulos:**
  - `PrismaModule`: Para la conexión a la base de datos PostgreSQL
  - `EvaluacionesModule`: Para la lógica de consolidación de evaluaciones

- **Controladores:**
  - `EvaluacionesController`: Expone endpoints para consultar las evaluaciones consolidadas
  - `AppController`: Gestiona las vistas web básicas

- **Servicios:**
  - `PrismaService`: Gestiona la conexión con la base de datos
  - `EvaluacionesService`: Implementa la lógica de consolidación de evaluaciones

### Frontend (Simple)
- Interfaz web básica usando Handlebars (hbs) como motor de plantillas
- Estilos CSS sencillos pero funcionales
- JavaScript vanilla para realizar peticiones y renderizar datos

## Tecnologías Utilizadas
- **Backend**:
  - NestJS (Framework Node.js)
  - Prisma ORM
  - PostgreSQL (Base de datos)
  
- **Frontend**:
  - Handlebars (HBS)
  - HTML/CSS/JavaScript

## Endpoints API

### Consolidación de Evaluaciones
- `GET /evaluaciones/consolidacion`: Obtiene la consolidación de todos los videojuegos
- `GET /evaluaciones/consolidacion/:id_videojuego`: Obtiene la consolidación de un videojuego específico

### Vistas Web
- `GET /`: Página principal con listado de videojuegos y evaluaciones consolidadas
- `GET /detalle?id=X`: Vista detallada de la evaluación de un videojuego específico

## Instalación y Ejecución

### Requisitos
- Node.js
- PostgreSQL
- npm o yarn

### Pasos para Ejecutar
1. Clonar el repositorio
2. Instalar dependencias:
   ```
   npm install
   ```
3. Configurar el archivo `.env` con los datos de conexión a la base de datos
4. Ejecutar migraciones de Prisma (si es necesario):
   ```
   npx prisma migrate dev
   ```
5. Ejecutar la aplicación:
   ```
   npm run start:dev
   ```
6. Acceder a la interfaz web en: http://localhost:3000

## Configuración del Entorno
Se debe crear un archivo `.env` con la siguiente configuración:
```
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/gamerlab_db?schema=public"
PORT=3000
``` 