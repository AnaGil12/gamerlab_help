import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'hbs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // Configuración de CORS
  app.enableCors();
  
  // Configurar helpers de Handlebars
  hbs.registerHelper('formatDate', function(date) {
    return new Date(date || Date.now()).toLocaleString();
  });
  
  hbs.registerHelper('add', function(a, b) {
    return a + b;
  });
  
  hbs.registerHelper('calcularRatingClase', function(promedio) {
    return Math.round(promedio);
  });
  
  hbs.registerHelper('buscarCriterio', function(criterios, nombreCriterio) {
    return criterios.find(c => c.nombre === nombreCriterio) || { promedio: 0 };
  });
  
  // Helper para la fecha actual
  hbs.registerHelper('now', function() {
    return new Date();
  });
  
  // Configurar vistas - Corregir la ruta para que funcione tanto en desarrollo como en producción
  const viewsPath = join(process.cwd(), 'views');
  app.setBaseViewsDir(viewsPath);
  console.log(`Ruta de vistas configurada en: ${viewsPath}`);
  app.setViewEngine('hbs');
  
  // Usar un puerto diferente (3001) por si el 3000 sigue ocupado
  await app.listen(process.env.PORT ?? 3001);
  
  console.log(`Aplicación iniciada en: ${await app.getUrl()}`);
}
bootstrap();
