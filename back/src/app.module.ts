import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Módulos de tus entidades


@Module({
  imports: [
    // Configuración de variables de entorno
    ConfigModule.forRoot({
      envFilePath: 'env.development', // tu archivo con DB_HOST, DB_PORT, etc.
      isGlobal: true, // disponible en toda la app
    }),

    // Conexión a PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true, // detecta todas tus entidades
      synchronize: true, // crea/actualiza tablas automáticamente (solo para desarrollo)
      logging: true, // muestra comandos SQL en consola
    }),

    // Módulos de entidades
    UsersModule,
    ProductsModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}