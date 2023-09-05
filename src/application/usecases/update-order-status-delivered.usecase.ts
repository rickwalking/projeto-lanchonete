import { Injectable } from '@nestjs/common';
import { OrderService } from '../services/order.service';

@Injectable()
export class UpdateOrderStatusDeliveredUseCase {
  constructor(private readonly orderService: OrderService) {}

  async execute(id: number) {
    return await this.orderService.update(id, { status: 'RECEBIDO' });
  }
}
