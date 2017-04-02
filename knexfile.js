// Update with your config settings.

module.exports = {
  test: {
    client: 'postgresql',
    connection: {
      database: 'fantasy',
      user:     'postgres',
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
      database: 'fantasy',
      user:     'postgres',
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
};
