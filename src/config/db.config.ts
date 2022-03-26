import { ConnectionOptions } from 'typeorm';

const dbConfig: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'postgres',
  synchronize: true,
  logging: false,
  entities: [
    'src/entity/**/*.ts',
  ],
  migrations: [
    'src/migration/**/*.ts',
  ],
  subscribers: [
    'src/subscriber/**/*.ts',
  ],
  cli: {
    'entitiesDir': 'src/entity',
    'migrationsDir': 'src/migration',
    'subscribersDir': 'src/subscriber',
  },
};

export default dbConfig;