import { Inject, Injectable } from '@nestjs/common';
import { IProduct } from '../interfaces/product.repository.interface';
import { Product } from 'src/@types/product';

@Injectable()
export class ProductService {
  constructor(
    @Inject('ProductRepository')
    private readonly productRepository: IProduct,
  ) {}

  async findAll(): Promise<Product.Data[]> {
    return this.productRepository.findAll();
  }

  async findOne(id: number): Promise<Product.Data | null> {
    return this.productRepository.findOne(id);
  }

  async create(product: Partial<Product.Data>): Promise<Product.Data> {
    return this.productRepository.create(product);
  }

  async update(
    id: number,
    data: Partial<Product.Data>,
  ): Promise<Product.Data | null> {
    await this.productRepository.update(id, data);
    return this.productRepository.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.productRepository.remove(id);
  }
}
