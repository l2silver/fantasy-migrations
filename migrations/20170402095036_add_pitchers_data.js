exports.up = function(knex, Promise) {
  const results = [knex.schema.raw(`COPY p FROM '/users/leigh/Downloads/pitchers.csv' DELIMITER ',' CSV HEADER;`)]
  return Promise.all(results)
};

exports.down = function(knex, Promise) {
  const results = [knex.schema.raw(`TRUNCATE p;`)]
  return Promise.all(results)
};
