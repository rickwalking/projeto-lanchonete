import { Categoria } from '@prisma/client';

export interface ICategory {
  findAll(): Promise<Categoria[]>;
  findOne(id: number): Promise<Categoria>;
  create(categoria: Partial<Categoria>): Promise<Categoria>;
  update(id: number, categoria: Partial<Categoria>): Promise<Categoria>;
  remove(id: number): Promise<void>;
}
