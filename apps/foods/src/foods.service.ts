import { Injectable } from '@nestjs/common';

@Injectable()
export class FoodsService {
  foods = [
    {
      id: 1,
      name: 'Apple',
    },
  ];

  indexFoods(data) {
    console.log('Receiving payload from client ...', data);

    return this.foods;
  }
}
