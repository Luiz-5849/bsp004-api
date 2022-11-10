import { Injectable } from '@nestjs/common';
import { CreatePlaceServicesDTO } from './dto/createPlaceServices.dto';
import { UpdatePlaceServicesDTO } from './dto/updatePlaceServices.dto';

@Injectable()
export class PlaceServicesService {
  async create(createPlaceServicesDTO: CreatePlaceServicesDTO) {
    return createPlaceServicesDTO;
  }

  async findAll() {
    return 'Retornando todos os lugares';
  }

  async findOne(id: number) {
    return { id: Number(id) };
  }

  async update(id: number, updatePlaceServicesDTO: UpdatePlaceServicesDTO) {
    return { id: Number(id), ...updatePlaceServicesDTO };
  }

  async delete(id: number) {
    return { id: Number(id) };
  }
}
