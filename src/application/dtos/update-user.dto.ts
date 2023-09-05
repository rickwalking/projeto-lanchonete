import { ApiProperty } from '@nestjs/swagger';
import { IsCPF } from 'brazilian-class-validator';
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateUserDTO {
  @IsNotEmpty({ message: 'O campo nome não pode estar vazio' })
  @IsString({ message: 'O campo nome deve ser uma string' })
  @ApiProperty()
  nome: string;

  @IsNotEmpty({ message: 'O campo CPF não pode estar vazio' })
  @IsCPF({ message: 'CPF inválido' })
  @ApiProperty()
  cpf: string;

  @IsNotEmpty({ message: 'O campo email não pode estar vazio' })
  @IsEmail({}, { message: 'Email inválido' })
  @ApiProperty()
  email: string;
}
