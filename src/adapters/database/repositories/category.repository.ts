import { Injectable } from '@nestjs/common';
import { Categoria } from '@prisma/client';
import { PrismaHelper } from '../helpers/prisma.helper';
import { ICategory } from 'src/application/interfaces/category.repository.interface';

@Injectable()
export class CategoryRepository implements ICategory {
  constructor(private readonly prisma: PrismaHelper) {}

  async findAll(): Promise<Categoria[]> {
    return await this.prisma.categoria.findMany();
  }

  async findOne(id: number): Promise<Categoria> {
    return await this.prisma.categoria.findUnique({
      where: { id },
    });
  }

  async create(categoria: Categoria): Promise<Categoria> {
    return await this.prisma.categoria.create({
      data: categoria,
    });
  }

  async update(id: number, categoria: Categoria): Promise<Categoria> {
    return await this.prisma.categoria.update({
      where: { id },
      data: categoria,
    });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.categoria.delete({
      where: { id },
    });
  }
}
