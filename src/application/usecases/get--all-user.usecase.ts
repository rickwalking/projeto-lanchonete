import { Injectable } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Injectable()
export class GetAllUserUseCase {
  constructor(private readonly userService: UserService) {}

  async execute() {
    return await this.userService.findAll();
  }
}
