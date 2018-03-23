
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('additional', function(table){
      table.integer('id');
      table.text('notes');
      table.string('playerid').index();
      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('additional') 
  ])
};
