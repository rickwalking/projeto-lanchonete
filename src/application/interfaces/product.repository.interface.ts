import { Produto } from '@prisma/client';

export interface IProduct {
  findAll(): Promise<Produto[]>;
  findOne(id: number): Promise<Produto>;
  create(produto: Partial<Produto>): Promise<Produto>;
  update(id: number, pedido: Partial<Produto>): Promise<Produto>;
  remove(id: number): Promise<void>;
}
