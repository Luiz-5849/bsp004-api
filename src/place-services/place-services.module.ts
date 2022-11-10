import { Module } from '@nestjs/common';
import { PlaceServicesController } from './place-services.controller';
import { PlaceServicesService } from './place-services.service';

@Module({
  controllers: [PlaceServicesController],
  providers: [PlaceServicesService]
})
export class PlaceServicesModule {}
