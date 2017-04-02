const tables = ['c', '1b', '2b', 'ss', '3b', 'rf', 'cf', 'lf', 'of'];
exports.up = function(knex, Promise) {
  const results = tables.map((name)=>knex.schema.raw(`COPY "${name}" FROM '/users/leigh/Downloads/${name}.csv' DELIMITER ',' CSV HEADER;`))
  return Promise.all(results)
};

exports.down = function(knex, Promise) {
  const results = tables.map((name)=>knex.schema.raw(`TRUNCATE "${name}";`))
  return Promise.all(results)
};
