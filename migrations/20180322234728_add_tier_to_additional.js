
exports.up = function(knex, Promise) {
  return knex.schema.table('additional', function (table) {
    table.string('tier');
    table.string('injuries');
    table.string('prospect');
    table.string('drafted');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('additional', function (table) {
    table.dropColumns(['teir', 'injuries', 'prospect', 'drafted']);
  })
};
