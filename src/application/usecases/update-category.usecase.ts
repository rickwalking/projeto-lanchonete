import { Injectable } from '@nestjs/common';
import { CategoryService } from '../services/category.service';

@Injectable()
export class UpdateCategoryUseCase {
  constructor(private readonly categoryService: CategoryService) {}

  async execute({ id, data }: { id: number; data: Partial<User.Data> }) {
    return await this.categoryService.update(id, data);
  }
}
