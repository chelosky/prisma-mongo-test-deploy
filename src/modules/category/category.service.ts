import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  public async getCategories() {
    return this.prismaService.category.findMany();
  }

  public async findCategory(name: string) {
    return this.prismaService.category.findFirst({
      where: {
        name,
      },
    });
  }

  public async createCategory(name: string) {
    return this.prismaService.category.create({
      data: {
        name,
      },
    });
  }
}
