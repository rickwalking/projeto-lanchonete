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
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDTO } from 'src/application/dtos/create-user.dto';
import { UpdateUserDTO } from 'src/application/dtos/update-user.dto';
import { CreateUserUseCase } from 'src/application/usecases/create-user.usecase';
import { DeleteUserUseCase } from 'src/application/usecases/delete-user.usecase';
import { GetAllUserUseCase } from 'src/application/usecases/get--all-user.usecase';
import { GetUserUseCase } from 'src/application/usecases/get-user.usecase';
import { UpdateUserUseCase } from 'src/application/usecases/update-user.usecase';

@ApiTags('Usuário')
@Controller('v1/user')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getAllUserUseCase: GetAllUserUseCase,
    private readonly getUserUseCase: GetUserUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase,
  ) {}

  @ApiOperation({ summary: 'Criar um usuário' })
  @ApiBody({ type: CreateUserDTO }) // Especifique o tipo do corpo da requisição
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso' })
  @ApiResponse({ status: 400, description: 'Requisição inválida' })
  @Post()
  async createUser(@Body() data: CreateUserDTO) {
    return await this.createUserUseCase.execute(data);
  }

  @ApiOperation({ summary: 'Obter todos os usuários' })
  @ApiResponse({
    status: 200,
    description: 'Lista de usuários retornada com sucesso',
  })
  @Get('')
  async getAllUser() {
    return await this.getAllUserUseCase.execute();
  }

  @ApiOperation({ summary: 'Obter um usuário por ID' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Usuário retornado com sucesso' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  @Get(':id')
  async getUser(@Param('id') id: string) {
    return await this.getUserUseCase.execute(Number(id));
  }

  @ApiOperation({ summary: 'Atualizar um usuário por ID' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiBody({ type: UpdateUserDTO })
  @ApiResponse({ status: 200, description: 'Usuário atualizado com sucesso' })
  @ApiResponse({ status: 400, description: 'Requisição inválida' })
  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() data: UpdateUserDTO) {
    return await this.updateUserUseCase.execute({ id: Number(id), data });
  }

  @ApiOperation({ summary: 'Excluir um usuário por ID' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 204, description: 'Usuário excluído com sucesso' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return await this.deleteUserUseCase.execute(Number(id));
  }
}
