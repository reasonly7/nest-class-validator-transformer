import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
  ) {}

  create(createUserDto: CreateUserDto) {
    return 'create'
  }

  findAll() {
    return 'findAll'
  }

  findOne(id: number) {
      return 'fineOne'
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return 'update'
  }

  async remove(id: number) {
    return 'remove'
  }
}
