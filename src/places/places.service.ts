import { Injectable } from '@nestjs/common';

@Injectable()
export class PlacesService {
  async create(name: string) {
    return `Lugar criado com nome ${name['name']}`;
  }

  async findAll() {
    return 'Retornando todos os lugares';
  }

  async findOne(id: number) {
    return `Retornando lugar de id ${id}`;
  }

  async update(id: number, name: string) {
    return `Atualizando lugar de id ${id} com novo nome ${name['name']}`;
  }

  async delete(id: number) {
    return `Deletando lugar de id ${id}`;
  }
}
