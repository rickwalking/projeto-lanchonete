import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsInt, IsString, Min } from 'class-validator';

class Product {
  @IsInt()
  @ApiProperty()
  id: number 

  @IsString()
  @ApiProperty()
  nome: string;

  @IsDecimal(
    { force_decimal: true },
    { message: 'Preço deve ser um número válido' },
  )
  @ApiProperty()
  preco: any;

  @IsString()
  @ApiProperty()
  descricao: string;

  @IsInt()
  @Min(0)
  @ApiProperty()
  quantidade: number;

  @IsInt()
  @ApiProperty()
  categoria_id: number;
}

export class CreateOrderDTO {
  @IsDecimal()
  @ApiProperty()
  total: any;

  @ApiProperty()
  usuario_id: number;

  @ApiProperty({ type: () => [Product] })
  produtos: Partial<Product>[]
}
