import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  // Cria uma nova categoria
  async create(name: string) {
    return `Criando uma nova categoria de nome ${name['name']}`;
  }

  // Retorna todas as categorias
  async findAll(): Promise<string> {
    return 'Retornando todas as categorias';
  }

  // Retorna uma única categoria
  async findOne(id: number): Promise<string> {
    return `Retornando uma única categoria com o id ${id}`;
  }

  // Atualiza uma categoria
  async update(id: number, name: string): Promise<string> {
    return `Retornando categoria atualizada de id ${id} e novo nome ${name['name']}`;
  }

  // Exclui uma categoria
  async delete(id: number) {
    return `Excluindo categoria de id ${id}`;
  }
}
