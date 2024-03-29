import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5000, '0.0.0.0', () => {
    console.log('the server runs on 5000');
  });
}
bootstrap();
