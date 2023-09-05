import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger'; // Importe os decoradores do Swagger
import { CreateProductDTO } from 'src/application/dtos/create-product.dto';
import { UpdateProductDTO } from 'src/application/dtos/update-product.dto';
import { CreateProductUseCase } from 'src/application/usecases/create-product.usecase';
import { DeleteProductUseCase } from 'src/application/usecases/delete-product.usecase';
import { GetAllProductUseCase } from 'src/application/usecases/get--all-product.usecase';
import { GetProductUseCase } from 'src/application/usecases/get-product.usecase';
import { UpdateProductsUseCase } from 'src/application/usecases/update-product.usecase';

@ApiTags('Produto')
@Controller('v1/product')
export class ProductController {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly getAllProductUseCase: GetAllProductUseCase,
    private readonly getProductUseCase: GetProductUseCase,
    private readonly updateProductUseCase: UpdateProductsUseCase,
    private readonly deleteProductUseCase: DeleteProductUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo produto' })
  @ApiBody({ type: CreateProductDTO })
  async createProduct(@Body() data: CreateProductDTO) {
    return await this.createProductUseCase.execute(data);
  }

  @Get('')
  @ApiOperation({ summary: 'Obtém todos os produtos' })
  async getAllProduct() {
    return await this.getAllProductUseCase.execute();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtém um produto pelo ID' })
  @ApiParam({ name: 'id', type: 'string' })
  async getProduct(@Param('id') id: string) {
    return await this.getProductUseCase.execute(Number(id));
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza um produto pelo ID' })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiBody({ type: UpdateProductDTO })
  async updateProduct(@Param('id') id: string, @Body() data: UpdateProductDTO) {
    return await this.updateProductUseCase.execute({ id: Number(id), data });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Exclui um produto pelo ID' })
  @ApiParam({ name: 'id', type: 'string' })
  async deleteProduct(@Param('id') id: string) {
    return await this.deleteProductUseCase.execute(Number(id));
  }
}
