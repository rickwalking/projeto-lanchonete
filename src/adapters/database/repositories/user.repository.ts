import { Injectable } from '@nestjs/common';
import { Usuario } from '@prisma/client';
import { PrismaHelper } from '../helpers/prisma.helper';
import { IUser } from 'src/application/interfaces/user.repository.interface';

@Injectable()
export class UserRepository implements IUser {
  constructor(private readonly prisma: PrismaHelper) {}

  async findAll(): Promise<Usuario[]> {
    return await this.prisma.usuario.findMany();
  }

  async findOne(id: number): Promise<Usuario> {
    return await this.prisma.usuario.findUnique({
      where: { id },
    });
  }

  async create(usuario: Usuario): Promise<Usuario> {
    return await this.prisma.usuario.create({
      data: usuario,
    });
  }

  async update(id: number, usuario: Usuario): Promise<Usuario> {
    return await this.prisma.usuario.update({
      where: { id },
      data: usuario,
    });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.usuario.delete({
      where: { id },
    });
  }
}
