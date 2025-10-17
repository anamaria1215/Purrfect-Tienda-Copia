import { DataSourceOptions } from 'typeorm';
import { config as dotenvConfig } from 'dotenv';
import { join } from 'path';

dotenvConfig({ path: '.env' }); // Asegúrate que apunta al .env correcto

const ormConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD, // Aquí será leído como string
  database: process.env.DB_NAME,
  synchronize: true, // Solo en dev
  logging: true,
  entities: [join(__dirname, '..', '**', '*.entity.{ts,js}')],
  migrations: [join(__dirname, '..', 'migrations', '*.{ts,js}')],
};

export default ormConfig;
