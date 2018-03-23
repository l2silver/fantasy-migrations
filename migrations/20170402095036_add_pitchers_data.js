const { getPitchersInsert } = require('..')

exports.up = function(knex, Promise) {
  const results = [knex.schema.raw(getPitchersInsert('p'))]
  return Promise.all(results)
};

exports.down = function(knex, Promise) {
  const results = [knex.schema.raw(`TRUNCATE p;`)]
  return Promise.all(results)
};
