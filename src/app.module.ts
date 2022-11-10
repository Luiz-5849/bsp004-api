import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { PlacesModule } from './places/places.module';
import { PlaceServicesModule } from './place-services/place-services.module';

@Module({
  imports: [CategoriesModule, UsersModule, PlacesModule, PlaceServicesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
