import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getCategories() {
    return this.categoryService.getCategories();
  }

  @Post()
  async createCategory(@Body() categoryData: { name: string }) {
    return this.categoryService.createCategory(categoryData.name);
  }
}
