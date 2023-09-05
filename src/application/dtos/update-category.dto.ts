import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateCategoryDTO {
  @IsString()
  @ApiProperty()
  nome: string;
}
