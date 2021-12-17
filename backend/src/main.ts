import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import {ConfigService} from "@nestjs/config";

async function bootstrap() {
  const logger: Logger = new Logger('bootstrap');

  const app = await NestFactory.create(AppModule, { cors: true });
  const configService: ConfigService = app.get<ConfigService>(ConfigService);
  await app.listen(configService.get('APP_RUN_PORT'));

  logger.log('Application run on Port: ' + configService.get('APP_RUN_PORT'));
}
bootstrap();
