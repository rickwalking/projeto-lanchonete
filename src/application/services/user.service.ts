import { Inject, Injectable } from '@nestjs/common';
import { IUser } from '../interfaces/user.repository.interface';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: IUser,
  ) {}

  async findAll(): Promise<User.Data[]> {
    return this.userRepository.findAll();
  }

  async findOne(id: number): Promise<User.Data | null> {
    return this.userRepository.findOne(id);
  }

  async create(user: Partial<User.Data>): Promise<User.Data> {
    return this.userRepository.create(user);
  }

  async update(
    id: number,
    data: Partial<User.Data>,
  ): Promise<User.Data | null> {
    await this.userRepository.update(id, data);
    return this.userRepository.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.remove(id);
  }
}
