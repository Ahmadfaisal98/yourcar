module.exports = [
  {
    name: 'dev',
    type: 'mysql',
    host: 'mysqldb',
    port: 3306,
    username: 'root',
    password: 'pass123',
    database: 'yourcar',
    entities: ['dist/**/entities/*{.ts,.js}'],
    synchronize: true,
    migrations: ['dist/migrations/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/migrations',
    },
  },
  {
    name: 'prod',
    type: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: ['dist/**/entities/*{.ts,.js}'],
    synchronize: false,
    ssl:
      process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false }
        : false,
    migrations: ['dist/migrations/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/migrations',
    },
  },
];
