import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';

// NOTA: Este archivo ya no hace lectura directa de .env
// Se recomienda usar TypeOrmModule.forRootAsync en AppModule
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'purrfect_db',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  synchronize: false,
  logging: true,
});
