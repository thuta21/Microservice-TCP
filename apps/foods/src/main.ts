import { NestFactory } from '@nestjs/core';
import { FoodsModule } from './foods.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { getConfig } from '../../../helpers/app';

async function bootstrap() {
  const tcpPort = await getConfig(FoodsModule, 'foods.tcpPort');
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    FoodsModule,
    {
      transport: Transport.TCP,
      options: {
        port: tcpPort,
      },
    },
  );
  await app.listen();
  console.log(
    `Foods Tcp Gateway service is ready! HTTP port is running in ${tcpPort}`,
  );
}
bootstrap();
