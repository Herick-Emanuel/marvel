const path = require('path');

module.exports = {
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
    directory: path.resolve(__dirname, 'seeds'),
  },
};
