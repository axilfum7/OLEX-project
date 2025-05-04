import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addSecurityRequirements('bearer', ['bearer'])
    .addBearerAuth()
    .addTag('cats')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true}));
  SwaggerModule.setup( 'olx', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();