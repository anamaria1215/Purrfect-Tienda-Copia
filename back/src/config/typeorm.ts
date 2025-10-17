// src/config/typeorm.ts
import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

// Carga el .env.development
dotenv.config({ path: '.env.development' });

// Configuración de TypeORM
const config: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'purrfect_db',
  entities: ['src/**/*.entity.ts'],  // Para desarrollo con ts-node
  migrations: ['src/migrations/*{.ts,.js}'],
  synchronize: true,                 // solo desarrollo
  logging: true,                     // para ver queries
};

// DEBUG: Verifica que las variables estén correctas
console.log('TypeORM Config:', {
  host: config.host,
  port: config.port,
  username: config.username,
  password: config.password ? '****' : '(vacío)',
  database: config.database,
});

export default registerAs('typeorm', () => config);

// Fuente de conexión para usar en scripts de migración
export const connectionSource = new DataSource(config);
