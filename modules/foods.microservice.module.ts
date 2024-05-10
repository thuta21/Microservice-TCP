import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Module({
  providers: [
    {
      provide: 'FOODS_SERVICE',
      useFactory: async (configService: ConfigService) => {
        const port = configService.get('foods.tcpPort');
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            port,
          },
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: ['FOODS_SERVICE'],
})
export class FoodsMicroserviceModule {}
