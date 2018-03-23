// Update with your config settings.

module.exports = {
  test: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE,
      user:     process.env.POSGRES_USER,
      password: '',
      host: 'localhost',
      port: 5432,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE,
      user:     process.env.POSGRES_USER,
      password: '',
      host: 'localhost',
      port: 5432,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'postgresql',
    connection: process.env.PRODUCTION_DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
};
