"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const hbs = require("hbs");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    hbs.registerHelper('formatDate', function (date) {
        return new Date(date || Date.now()).toLocaleString();
    });
    hbs.registerHelper('add', function (a, b) {
        return a + b;
    });
    hbs.registerHelper('calcularRatingClase', function (promedio) {
        return Math.round(promedio);
    });
    hbs.registerHelper('buscarCriterio', function (criterios, nombreCriterio) {
        return criterios.find(c => c.nombre === nombreCriterio) || { promedio: 0 };
    });
    hbs.registerHelper('now', function () {
        return new Date();
    });
    const viewsPath = (0, path_1.join)(process.cwd(), 'views');
    app.setBaseViewsDir(viewsPath);
    console.log(`Ruta de vistas configurada en: ${viewsPath}`);
    app.setViewEngine('hbs');
    await app.listen(process.env.PORT ?? 3001);
    console.log(`Aplicación iniciada en: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map