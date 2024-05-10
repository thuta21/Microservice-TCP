import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import app from 'config/app';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [app],
    }),
  ],
})
export class FoodieConfigModule {}
