import { UserRepository } from "@database/repository/core/user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findByUsername(username: string) {
    return await this.userRepository.findByUsername(username);
  }
}
