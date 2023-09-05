import { Injectable, Inject } from '@nestjs/common';
import { IPayment } from '../interfaces/payment.repository.interface';
import { IPaymentProvider } from '../interfaces/payment.provider.interface';

@Injectable()
export class PaymentService {
  constructor(
    @Inject('PaymentRepository')
    private readonly paymentRepository: IPayment,
    @Inject('PaymentProvider')
    private readonly paymentProvider: IPaymentProvider
  ) {}

  async createPayment(order_id: number, value: number, email: string) {
    return await this.paymentProvider.create(order_id, value, email)
  }

  async getPayment(id: number) {
    return await this.paymentProvider.get(id)
  }

  async findAll(): Promise<Payment.Data[]> {
    return this.paymentRepository.findAll();
  }

  async findOne(id: number): Promise<Payment.Data | null> {
    return this.paymentRepository.findOne(id);
  }

  async create(payment: Partial<Payment.Data>): Promise<Payment.Data> {
    return this.paymentRepository.create(payment);
  }

  async update(
    id: number,
    data: Partial<Payment.Data>,
  ): Promise<Payment.Data | null> {
    await this.paymentRepository.update(id, data);
    return this.paymentRepository.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.paymentRepository.remove(id);
  }
}
