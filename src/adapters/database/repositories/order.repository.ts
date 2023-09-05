import { Injectable } from '@nestjs/common';
import { $Enums, Pedido } from '@prisma/client';
import { PrismaHelper } from '../helpers/prisma.helper';
import { IOrder } from 'src/application/interfaces/order.repository.interface';
import { Decimal } from '@prisma/client/runtime/library';
import { Order } from 'src/@types/order';

@Injectable()
export class OrderRepository implements IOrder {
  constructor(private readonly prisma: PrismaHelper) {}

  async findByStatus(status: Order.Steps): Promise<{ id: number; pedido_id: string; total: Decimal; status: $Enums.EtapasPedido; usuario_id: number; criado_em: Date; atualizado_em: Date; }[]> {
    return await this.prisma.pedido.findMany({ where: { status }});
  }

  async findAll(): Promise<Pedido[]> {
    return await this.prisma.pedido.findMany();
  }

  async findOne(id: number): Promise<Pedido> {
    return await this.prisma.pedido.findUnique({
      where: { id },
    });
  }

  async create(pedido: Pedido): Promise<Pedido> {
    return await this.prisma.pedido.create({
      data: pedido,
    });
  }

  async update(id: number, pedido: Pedido): Promise<Pedido> {
    return await this.prisma.pedido.update({
      where: { id },
      data: pedido,
    });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.pedido.delete({
      where: { id },
    });
  }
}
