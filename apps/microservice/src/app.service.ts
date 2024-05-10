import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('FOODS_SERVICE')
    private readonly foodsServiceClient: ClientProxy,
  ) {}

  indexFoods() {
    return this.foodsServiceClient.send({ cmd: 'indexFoods' }, { foo: 'bar' });
  }
}
