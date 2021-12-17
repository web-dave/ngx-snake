import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger: Logger = new Logger('bootstrap');

  const app = await NestFactory.create(AppModule, { cors: true });
  const applicationPort = process.env.APP_RUN_PORT;
  await app.listen(3000);

  logger.log('Application run on Port: ' + applicationPort);
}
bootstrap();
