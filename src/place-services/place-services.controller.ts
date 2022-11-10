import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePlaceServicesDTO } from './dto/createPlaceServices.dto';
import { UpdatePlaceServicesDTO } from './dto/updatePlaceServices.dto';
import { PlaceServicesService } from './place-services.service';

@Controller('place-services')
export class PlaceServicesController {
  constructor(private readonly placeServices: PlaceServicesService) {}

  @Post()
  async create(@Body() createPlaceServicesDTO: CreatePlaceServicesDTO) {
    return this.placeServices.create(createPlaceServicesDTO);
  }

  @Get()
  async findAll() {
    return this.placeServices.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.placeServices.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updatePlaceServicesDTO: UpdatePlaceServicesDTO,
  ) {
    return this.placeServices.update(id, updatePlaceServicesDTO);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.placeServices.delete(id);
  }
}
