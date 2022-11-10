import { Injectable } from '@nestjs/common';
import { CreateCategoriesDTO } from './dto/createCategories.dto';
import { UpdateCategoriesDTO } from './dto/updateCategories.dto';

@Injectable()
export class CategoriesService {
  // Cria uma nova categoria
  async create(createCategoriesDTO: CreateCategoriesDTO) {
    return createCategoriesDTO;
  }

  // Retorna todas as categorias
  async findAll(): Promise<string> {
    return 'Retornando todas as categorias';
  }

  // Retorna uma única categoria
  async findOne(id: number) {
    return `Retornando uma única categoria com o id ${id}`;
  }

  // Atualiza uma categoria
  async update(id: number, updateCategoriesDTO: UpdateCategoriesDTO) {
    return { id: Number(id), data: updateCategoriesDTO };
  }

  // Exclui uma categoria
  async delete(id: number) {
    return `Excluindo categoria de id ${id}`;
  }
}
