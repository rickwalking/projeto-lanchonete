import { Injectable } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(data: Partial<User.Data>) {
    return this.userService.create(data);
  }
}
