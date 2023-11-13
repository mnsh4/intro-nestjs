import { Injectable } from '@nestjs/common';

import { BrandsService } from '../brands/brands.service.ts';
import { CarsService } from '../cars/cars.service.ts';

import { BRANDS_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed.ts';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  populateDB() {
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillCarsWithSeedData(BRANDS_SEED);

    return 'Seed executed';
  }
}
