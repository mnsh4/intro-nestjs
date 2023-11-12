import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from "@nestjs/common";
import { CarsService } from "./cars.service";
import { CreateCarDto } from "./dto/create-car.dto";
import { UpdateCarDto } from "./dto/update-car.dto";

// Los controladores escuchan peticiones del cliente y emitir una respuesta
@Controller("cars") // http://localhost:3000/cars
export class CarsController {
  // Inyeccion de dependencia
  constructor(private readonly carsService: CarsService) {}

  @Get() // http://localhost:3000/api/v1/cars
  get() {
    return this.carsService;
  }

  @Get(":id") // http://localhost:3000/api/v1/cars/:id
  getCarById(@Param("id", ParseUUIDPipe) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Patch()
  updateCar(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto
  ) {
    return this.carsService.update(updateCarDto);
  }

  @Delete() // http://localhost:3000/cars/:id
  deleteCar(@Param("id", ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
