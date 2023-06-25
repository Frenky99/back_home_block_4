/**
 * Файл точки входа в приложение который использует функцию NestFactory для создания экземпляра приложения Nest
 */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Функция bootstrap(), запускает наше приложение
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
