import { Module } from '@nestjs/common';
import { FoodsController } from './foods.controller';
import { FoodsService } from './foods.service';
import { FoodieConfigModule } from '../../../modules/config.module';

@Module({
  imports: [FoodieConfigModule],
  controllers: [FoodsController],
  providers: [FoodsService],
})
export class FoodsModule {}
