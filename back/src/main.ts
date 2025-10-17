import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerGlobal } from './middleware/loggerGlobal';
import { DataSource } from 'typeorm';
import ormConfig from './config/typeorm';

async function bootstrap() {
  // 🔹 Test de conexión a la base de datos
  const testDataSource = new DataSource(ormConfig);
  try {
    await testDataSource.initialize();
    console.log('✅ Conexión a la base de datos exitosa!');
  } catch (error) {
    console.error('❌ Error conectando a la base de datos:', error);
    process.exit(1); // Sale si falla la conexión
  }

  // 🔹 Crear la app de Nest normalmente
  const app = await NestFactory.create(AppModule);

  // 🔹 Middleware global
  app.use(loggerGlobal);

  await app.listen(3002);
  console.log('Servidor corriendo en el puerto 3002 🐱');
}

bootstrap();
