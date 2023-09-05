import { Injectable } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Injectable()
export class DeleteUserUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(id: number) {
    return await this.userService.delete(id);
  }
}
