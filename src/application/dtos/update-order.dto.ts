import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, IsDecimal, Min } from "class-validator";

class Product {
    @IsInt()
    @ApiProperty()
    id?: number 
  
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

export class UpdateOrderProductsDTO {
    @ApiProperty({ type: () => [Product] })
    produtos: Partial<Product>[] 
}