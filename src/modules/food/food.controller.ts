import { Controller, Get, Post, Body } from '@nestjs/common';
import { FoodService } from './food.service';
import { Edible } from '@prisma/client';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Get()
  async getFoods() {
    return this.foodService.getFoods();
  }

  @Post()
  async createFood(
    @Body()
    foodData: {
      name: string;
      description?: string;
      isEdible: Edible;
      categoryName: string;
    },
  ) {
    return this.foodService.createFood(foodData);
  }
}
