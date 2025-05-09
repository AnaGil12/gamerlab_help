import { Controller, Get, Render, Param, Redirect, Query } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return { message: 'GamerLab - Sistema de Evaluación de Videojuegos' };
  }

  @Get('detalle')
  @Redirect('/evaluaciones/detalle')
  detalle(@Query('id') id: string) {
    return { url: `/evaluaciones/detalle?id=${id}` };
  }
} 