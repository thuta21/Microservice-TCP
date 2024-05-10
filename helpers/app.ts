import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

export async function getConfig<T>(module, key: string) {
  const app = await getApplicationContext(module);

  return (app.get(ConfigService) as ConfigService).get<T>(key, {
    infer: true,
  });
}

export async function getApplicationContext(module) {
  return await NestFactory.createApplicationContext(module);
}
