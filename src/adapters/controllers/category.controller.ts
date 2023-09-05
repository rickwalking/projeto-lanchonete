import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger'; // Import Swagger decorators
import { CreateCategoryDTO } from 'src/application/dtos/create-category.dto';
import { UpdateCategoryDTO } from 'src/application/dtos/update-category.dto';
import { CreateCategoryUseCase } from 'src/application/usecases/create-category.usecase';
import { DeleteCategoryUseCase } from 'src/application/usecases/delete-category.usecase';
import { GetAllCategoryUseCase } from 'src/application/usecases/get--all-category.usecase';
import { GetCategoryUseCase } from 'src/application/usecases/get-category.usecase';
import { UpdateCategoryUseCase } from 'src/application/usecases/update-category.usecase';

@ApiTags('Categoria')
@Controller('v1/category')
export class CategoryController {
  constructor(
    private readonly createCategoryUseCase: CreateCategoryUseCase,
    private readonly getAllCategoryUseCase: GetAllCategoryUseCase,
    private readonly getCategoryUseCase: GetCategoryUseCase,
    private readonly updateCategoryUseCase: UpdateCategoryUseCase,
    private readonly deleteCategoryUseCase: DeleteCategoryUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new category' })
  @ApiBody({ type: CreateCategoryDTO })
  async createCategory(@Body() data: CreateCategoryDTO) {
    return await this.createCategoryUseCase.execute(data);
  }

  @Get('')
  @ApiOperation({ summary: 'Get all categories' })
  async getAllCategory() {
    return await this.getAllCategoryUseCase.execute();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a category by ID' })
  @ApiParam({ name: 'id', type: 'integer' })
  async getCategory(@Param('id') id: string) {
    return await this.getCategoryUseCase.execute(Number(id));
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a category by ID' })
  @ApiParam({ name: 'id', type: 'integer' })
  @ApiBody({ type: UpdateCategoryDTO })
  async updateCategory(
    @Param('id') id: string,
    @Body() data: UpdateCategoryDTO,
  ) {
    return await this.updateCategoryUseCase.execute({ id: Number(id), data });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a category by ID' })
  @ApiParam({ name: 'id', type: 'integer' })
  async deleteCategory(@Param('id') id: string) {
    return await this.deleteCategoryUseCase.execute(Number(id));
  }
}
