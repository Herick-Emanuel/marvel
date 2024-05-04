import knex from 'knex';
import path from 'path';

const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'herick',
    password: 'thunder5',
    database: 'marvel_saga_db',
  },
  migrations: {
    directory: path.resolve(__dirname, 'migrations'),
  },
  seeds: {
    directory: "./seeds",
  },
});

export default db