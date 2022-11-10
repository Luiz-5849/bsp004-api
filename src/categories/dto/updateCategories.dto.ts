import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriesDTO } from './createCategories.dto';

export class UpdateCategoriesDTO extends PartialType(CreateCategoriesDTO) {}
