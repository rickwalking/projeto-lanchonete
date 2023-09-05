import { Injectable } from '@nestjs/common';
import { OrderService } from '../services/order.service';

@Injectable()
export class GetQueueOrderUseCase {
  constructor(private readonly orderService: OrderService) {}

  async execute() {
    return await this.orderService.findByStatus('EM_PREPARO')
  }
}
