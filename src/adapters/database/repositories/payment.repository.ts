import { Injectable } from '@nestjs/common';
import { Pagamento } from '@prisma/client';
import { PrismaHelper } from '../helpers/prisma.helper';
import { IPayment } from 'src/application/interfaces/payment.repository.interface';

@Injectable()
export class PaymentRepository implements IPayment {
  constructor(private readonly prisma: PrismaHelper) {}

  async findAll(): Promise<Pagamento[]> {
    return await this.prisma.pagamento.findMany();
  }

  async findOne(id: number): Promise<Pagamento> {
    return await this.prisma.pagamento.findUnique({
      where: { id },
    });
  }

  async create(pagamento: Pagamento): Promise<Pagamento> {
    return await this.prisma.pagamento.create({
      data: pagamento,
    });
  }

  async update(id: number, pagamento: Pagamento): Promise<Pagamento> {
    return await this.prisma.pagamento.update({
      where: { id },
      data: pagamento,
    });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.pagamento.delete({
      where: { id },
    });
  }
}
