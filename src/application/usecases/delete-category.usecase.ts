import { Injectable } from '@nestjs/common';
import { CategoryService } from '../services/category.service';

@Injectable()
export class DeleteCategoryUseCase {
  constructor(private readonly categoryService: CategoryService) {}

  async execute(id: number) {
    return await this.categoryService.delete(id);
  }
}
