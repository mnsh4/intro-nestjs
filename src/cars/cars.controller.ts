import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

// Los controladores escuchan peticiones del cliente y emitir una respuesta
@Controller('cars') // http://localhost:3000/cars
export class CarsController {
  // Inyeccion de dependencia
  constructor(private readonly carsService: CarsService) {}

  @Get() // http://localhost:3000/api/v1/cars
  get() {
    return this.carsService;
  }

  @Get(':id') // http://localhost:3000/api/v1/cars/:id
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() body: any) {
    return body;
  }

  @Patch()
  updateCar(@Body() body: any) {
    return body;
  }

  @Delete() // http://localhost:3000/cars/:id
  deleteCar(@Param('id', ParseIntPipe) id: string) {
    return {
      method: 'delete' + id,
    };
  }
}
