import { Injectable } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Injectable()
export class GetUserUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(id: number) {
    return await this.userService.findOne(id);
  }
}
