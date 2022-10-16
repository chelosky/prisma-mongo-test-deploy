import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { FoodModule } from './modules/food/food.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [FoodModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
