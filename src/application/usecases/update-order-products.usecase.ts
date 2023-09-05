import { Injectable } from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { Product } from 'src/@types/product';

@Injectable()
export class UpdateOrderProductsUseCase {
  constructor(private readonly orderService: OrderService) {}

  async execute({ id, data }: { id: number, data: Record<'produtos', Partial<Product.Data>[]>}) {
    return await this.orderService.update(id, data);
  }
}
