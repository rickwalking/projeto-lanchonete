import { Injectable } from '@nestjs/common';
import { CategoryService } from '../services/category.service';

@Injectable()
export class CreateCategoryUseCase {
  constructor(private readonly categoryService: CategoryService) {}

  async execute(data: Partial<Category.Data>) {
    return await this.categoryService.create(data);
  }
}
