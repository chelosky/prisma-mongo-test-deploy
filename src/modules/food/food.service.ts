import { Injectable } from '@nestjs/common';
import { Edible } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { CategoryService } from '../category/category.service';

@Injectable()
export class FoodService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly categoryService: CategoryService,
  ) {}

  public async getFoods() {
    return this.prismaService.food.findMany({
      include: {
        category: true,
      },
    });
  }

  public async createFood({
    name,
    description,
    isEdible,
    categoryName,
  }: {
    name: string;
    description?: string;
    isEdible: Edible;
    categoryName: string;
  }) {
    const category = await this.categoryService.findCategory(categoryName);

    if (!category) {
      throw new Error('Category doesnt exists');
    }

    return this.prismaService.food.create({
      data: {
        name,
        description,
        isEdible,
        categoryId: category.id,
      },
    });
  }
}
