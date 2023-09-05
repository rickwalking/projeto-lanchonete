import { Injectable } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Injectable()
export class UpdateUserUseCase {
  constructor(private readonly userService: UserService) {}

  async execute({ id, data }: { id: number; data: Partial<User.Data> }) {
    return await this.userService.update(id, data);
  }
}
