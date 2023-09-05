import { Injectable, Inject } from '@nestjs/common';
import { IOrder } from '../interfaces/order.repository.interface';
import { Order } from 'src/@types/order';

@Injectable()
export class OrderService {
  constructor(
    @Inject('OrderRepository')
    private readonly orderRepository: IOrder,
  ) {}

  async findByStatus(status: string): Promise<Order.Data[]> {
    return this.orderRepository.findByStatus(status)
  }

  async findAll(): Promise<Order.Data[]> {
    return this.orderRepository.findAll();
  }

  async findOne(id: number): Promise<Order.Data | null> {
    return this.orderRepository.findOne(id);
  }

  async create(order: Partial<Order.Data>): Promise<Order.Data> {
    return this.orderRepository.create(order);
  }

  async update(
    id: number,
    data: Partial<Order.Data>,
  ): Promise<Order.Data | null> {
    await this.orderRepository.update(id, data);
    return this.orderRepository.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.orderRepository.remove(id);
  }
}
