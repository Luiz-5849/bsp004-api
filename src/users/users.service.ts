import { Injectable } from '@nestjs/common';
import { CreateUsersDTO } from './dto/createUsers.dto';

@Injectable()
export class UsersService {
  async create(createUsersDTO: CreateUsersDTO) {
    return createUsersDTO;
  }

  async findAll() {
    return 'Retornando todos os usuários do sistema';
  }

  async findOne(id: number): Promise<string> {
    return `Retornando usuário com o id ${id}`;
  }

  async update(id: number, user: string): Promise<string> {
    return `Retornando dados do usuário de id ${id} e dados atualizados ${user['user']}`;
  }

  async delete(id: number) {
    return `Excluindo usuário id ${id}`;
  }
}
