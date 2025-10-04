import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerGlobal } from './middleware/loggerGlobal';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(new LoggerGlobal().use.bind(new LoggerGlobal()));
  await app.listen(3002);
  console.log('Servidor corriendo en el puerto 3002 🐱');
}
bootstrap();
