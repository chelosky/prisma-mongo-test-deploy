import { Module } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodController } from './food.controller';
import { PrismaService } from '../../prisma/prisma.service';
import { CategoryModule } from '../category/category.module';

@Module({
  imports: [CategoryModule],
  providers: [FoodService, PrismaService],
  controllers: [FoodController],
})
export class FoodModule {}
