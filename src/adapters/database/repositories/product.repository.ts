import { Injectable } from '@nestjs/common';
import { Produto } from '@prisma/client';
import { PrismaHelper } from '../helpers/prisma.helper';
import { IProduct } from 'src/application/interfaces/product.repository.interface';

@Injectable()
export class ProductRepository implements IProduct {
  constructor(private readonly prisma: PrismaHelper) {}

  async findAll(): Promise<Produto[]> {
    return await this.prisma.produto.findMany();
  }

  async findOne(id: number): Promise<Produto> {
    return await this.prisma.produto.findUnique({
      where: { id },
    });
  }

  async create(produto: Produto): Promise<Produto> {
    return await this.prisma.produto.create({
      data: produto,
    });
  }

  async update(id: number, produto: Produto): Promise<Produto> {
    return await this.prisma.produto.update({
      where: { id },
      data: produto,
    });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.produto.delete({
      where: { id },
    });
  }
}
