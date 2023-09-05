import { Injectable, Inject } from '@nestjs/common';
import { ICategory } from '../interfaces/category.repository.interface';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CategoryRepository')
    private readonly categoryRepository: ICategory,
  ) {}

  async findAll(): Promise<Category.Data[]> {
    return this.categoryRepository.findAll();
  }

  async findOne(id: number): Promise<Category.Data | null> {
    return this.categoryRepository.findOne(id);
  }

  async create(category: Partial<Category.Data>): Promise<Category.Data> {
    return this.categoryRepository.create(category);
  }

  async update(
    id: number,
    data: Partial<Category.Data>,
  ): Promise<Category.Data | null> {
    await this.categoryRepository.update(id, data);
    return this.categoryRepository.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.categoryRepository.remove(id);
  }
}
