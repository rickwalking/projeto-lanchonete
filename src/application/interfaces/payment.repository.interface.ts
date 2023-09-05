import { Pagamento } from '@prisma/client';

export interface IPayment {
  findAll(): Promise<Pagamento[]>;
  findOne(id: number): Promise<Pagamento>;
  create(pagamento: Partial<Pagamento>): Promise<Pagamento>;
  update(id: number, pagamento: Partial<Pagamento>): Promise<Pagamento>;
  remove(id: number): Promise<void>;
}
