import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

// Cargar variables del archivo .env.development
dotenvConfig({ path: '.env.development' });

// Saber si estamos en desarrollo
const isDev = process.env.NODE_ENV === 'development';

// Configuración de TypeORM
const config: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [
    isDev ? 'src/**/*.entity.ts' : 'dist/**/*.entity.js'
  ],
  migrations: [
    isDev ? 'src/migrations/*{.ts,.js}' : 'dist/migrations/*{.ts,.js}'
  ],
  logging: false,
  synchronize: false,
  dropSchema: false,
};

// Mostrar configuración (sin contraseña) para verificar
console.log('TypeORM Config:', {
  host: config.host,
  port: config.port,
  username: config.username,
  password: config.password ? '****' : null,
  database: config.database,
  entities: config.entities,
});

export default registerAs('typeorm', () => config);

// Fuente de datos para migraciones
export const connectionSource = new DataSource(config);
