import { PartialType } from '@nestjs/mapped-types';
import { CreatePlaceServicesDTO } from './createPlaceServices.dto';

export class UpdatePlaceServicesDTO extends PartialType(
  CreatePlaceServicesDTO,
) {}
