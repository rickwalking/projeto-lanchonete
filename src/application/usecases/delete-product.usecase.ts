import { Injectable } from '@nestjs/common';
import { ProductService } from '../services/product.service';

@Injectable()
export class DeleteProductUseCase {
  constructor(private readonly productService: ProductService) {}

  async execute(id: number) {
    return await this.productService.delete(id);
  }
}
