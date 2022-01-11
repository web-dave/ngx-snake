import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const logger: Logger = new Logger('bootstrap');

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });

  const configService: ConfigService = app.get<ConfigService>(ConfigService);

  const config = new DocumentBuilder()
    .setTitle('ngx snake')
    .setDescription(
      'The ngx snake API description<br>Get api-json file from here: <a target="_blank" href="/api-json">http(s)://<host>(:<port>)/api-json</a>',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(configService.get('APP_RUN_PORT'));

  logger.log('Application run on Port: ' + configService.get('APP_RUN_PORT'));
}

bootstrap();
