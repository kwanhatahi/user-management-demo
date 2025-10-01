import { join } from 'path';
import dotenv from 'dotenv';

dotenv.config();

export const connection = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT || '', 10) : 5432,
  username: process.env.DB_USERNAME,
  logging: 'all',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || '',
  synchronize: false,
  migrations: [join(__dirname, 'migrations', '*.{ts,js}')],
  entities: [join(__dirname, '/**/*.entity.{ts,js}')],
  extra: {
    max: 4,
  },
  seeds: [join(__dirname, 'seed/seeding', '*.{ts,js}')],
  factories: [join(__dirname, 'seed/factories', '*.{ts,js}')],
};

export default connection;
