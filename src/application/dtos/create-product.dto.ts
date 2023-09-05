import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDecimal, IsInt, Min } from 'class-validator';

export class CreateProductDTO {
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
