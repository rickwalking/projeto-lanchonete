import { Injectable } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { Product } from 'src/@types/product';

@Injectable()
export class UpdateProductsUseCase {
  constructor(private readonly productService: ProductService) {}

  async execute({ id, data }: { id: number; data: Partial<Product.Data | any> }) {
    return await this.productService.update(id, data);
  }
}
