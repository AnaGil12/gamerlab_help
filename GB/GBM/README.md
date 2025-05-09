<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# GamerLab - Sistema de Evaluación de Videojuegos

## Descripción

Sistema de evaluación para videojuegos desarrollados por equipos de estudiantes. Permite a los jurados realizar evaluaciones según diferentes criterios y visualizar resultados consolidados.

## Tecnologías

- **Backend**: NestJS (Node.js), Prisma ORM
- **Frontend**: React, React Router
- **Base de datos**: PostgreSQL

## Estructura del Proyecto

```
GB/GBM/
├── client/                   # Frontend React
│   ├── public/               # Archivos públicos
│   └── src/                  # Código fuente React
│       ├── components/       # Componentes reutilizables
│       ├── hooks/            # Hooks personalizados
│       ├── layouts/          # Layouts para páginas
│       ├── pages/            # Páginas de la aplicación
│       └── services/         # Servicios para API
├── dist/                     # Build de producción (backend)
├── prisma/                   # Configuración de Prisma ORM
│   ├── migrations/           # Migraciones de la base de datos
│   └── schema.prisma         # Esquema de la base de datos
├── src/                      # Código fuente backend
│   ├── evaluaciones/         # Módulo de evaluaciones
│   └── prisma/               # Módulo de Prisma
├── views/                    # Vistas Handlebars (Legacy)
```

## Instalación y Ejecución

### Requisitos previos

- Node.js >= 16
- PostgreSQL

### Pasos de instalación

1. Clonar el repositorio
2. Instalar dependencias del backend:

```bash
cd GB/GBM
npm install
```

3. Instalar dependencias del frontend:

```bash
cd client
npm install
```

4. Configurar variables de entorno: crear archivo `.env` en la raíz del proyecto

```
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/gamerlab"
PORT=3001
```

5. Ejecutar migraciones de la base de datos:

```bash
npx prisma migrate dev
```

6. Iniciar el servidor de desarrollo:

En una terminal (backend):
```bash
npm run start:dev
```

En otra terminal (frontend):
```bash
npm run client:dev
```

## Estructuras principales

### Principales endpoints API

- `GET /evaluaciones/consolidacion` - Obtener consolidación de todos los videojuegos
- `GET /evaluaciones/consolidacion/:id_videojuego` - Obtener consolidación de un videojuego específico
- `GET /evaluaciones/evaluaciones/:id_videojuego` - Obtener todas las evaluaciones de un videojuego
- `GET /evaluaciones/jurados` - Obtener lista de jurados
- `GET /evaluaciones/dashboard` - Datos para el dashboard
- `GET /evaluaciones/analytics` - Datos analíticos

### Páginas de frontend

- `/` - Página principal con lista de videojuegos evaluados
- `/evaluaciones/dashboard` - Dashboard con estadísticas
- `/evaluaciones/detalle` - Detalle de una evaluación específica

## Desarrollo

### Comandos útiles

- `npm run build` - Compilar el proyecto
- `npm run start:dev` - Iniciar servidor de desarrollo (backend)
- `npm run client:dev` - Iniciar servidor de desarrollo (frontend)
- `npm run prisma:seed` - Poblar la base de datos con datos de prueba

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
