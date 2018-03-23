const tables = ['c', '1b', '2b', 'ss', '3b', 'rf', 'cf', 'lf', 'of'];
const {getPlayersInsert} = require('..');
exports.up = function(knex, Promise) {
  const results = tables.map((name)=>knex.schema.raw(getPlayersInsert(name)))
  return Promise.all(results)
};

exports.down = function(knex, Promise) {
  const results = tables.map((name)=>knex.schema.raw(`TRUNCATE "${name}";`))
  return Promise.all(results)
};
