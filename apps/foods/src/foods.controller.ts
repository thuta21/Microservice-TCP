import { Controller } from '@nestjs/common';
import { FoodsService } from './foods.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}

  @MessagePattern({ cmd: 'indexFoods' })
  indexFoods(data) {
    return this.foodsService.indexFoods(data);
  }
}
