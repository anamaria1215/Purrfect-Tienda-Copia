import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import * as path from 'path';
import { config as dotenvConfig } from 'dotenv';

// Cargar .env.development asegurando la ruta absoluta
dotenvConfig({ path: path.resolve(__dirname, '../.env.development') });

// Mostrar valores para depuración
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);
console.log('DB_USERNAME:', process.env.DB_USERNAME);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);

const config: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  logging: false,
  synchronize: false,
  dropSchema: false,
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config);
