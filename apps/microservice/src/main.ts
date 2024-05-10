import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getConfig } from '../../../helpers/app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const httpPort = await getConfig(AppModule, 'apiGateWay.port');
  await app.listen(httpPort);

  console.log(
    `API Gateway service is ready! HTTP port is running in ${httpPort}`,
  );
}
bootstrap();
