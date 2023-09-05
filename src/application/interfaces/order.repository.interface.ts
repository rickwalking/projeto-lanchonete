import { Pedido } from '@prisma/client';

export interface IOrder {
  findByStatus(status: string): Promise<Pedido[]>;
  findAll(): Promise<Pedido[]>;
  findOne(id: number): Promise<Pedido>;
  create(pedido: Partial<Pedido>): Promise<Pedido>;
  update(id: number, pedido: Partial<Pedido>): Promise<Pedido>;
  remove(id: number): Promise<void>;
}
