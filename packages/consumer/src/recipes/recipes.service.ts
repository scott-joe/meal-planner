import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from '../database/database.service';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  create(createRecipeDto: CreateRecipeDto) {
    return 'This action adds a new recipe';
  }

  async findAll(): Promise<any> {
    const response = await this.prisma.recipe.findMany();
    return response;
  }

  async findOne(id: string) {
    const response = await this.prisma.recipe.findFirst({ where: { id }})
  }

  update(id: string, updateRecipeDto: UpdateRecipeDto) {
    return `This action updates a #${id} recipe`;
  }

  remove(id: string) {
    return `This action removes a #${id} recipe`;
  }
}
