import { Injectable } from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { Order } from 'src/@types/order';

@Injectable()
export class CreateOrderUseCase {
  constructor(private readonly orderService: OrderService) {}

  async execute(data: Partial<Order.Data>) {
    return await this.orderService.create(data);
  }
}
