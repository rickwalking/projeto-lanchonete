import { Injectable } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { Product } from 'src/@types/product';

@Injectable()
export class CreateProductUseCase {
  constructor(private readonly productService: ProductService) {}

  async execute(data: Partial<Product.Data>) {
    return this.productService.create(data);
  }
}
