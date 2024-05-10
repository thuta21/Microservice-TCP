import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodieConfigModule } from '../../../modules/config.module';
import { FoodsMicroserviceModule } from '../../../modules/foods.microservice.module';

@Module({
  imports: [FoodieConfigModule, FoodsMicroserviceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
