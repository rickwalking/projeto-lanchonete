import { Injectable } from '@nestjs/common';
import { ProductService } from '../services/product.service';

@Injectable()
export class GetProductUseCase {
  constructor(private readonly productService: ProductService) {}

  async execute(id: number) {
    return await this.productService.findOne(id);
  }
}
