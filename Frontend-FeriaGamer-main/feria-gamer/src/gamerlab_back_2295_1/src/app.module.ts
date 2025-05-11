import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { EvaluacionesModule } from './evaluaciones/evaluaciones.module';
import { AppController } from './app.controller';


@Module({
  imports: [
    PrismaModule, EvaluacionesModule 
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
