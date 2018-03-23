exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('p', function(table){
      table.string('name');
      table.string('team');
      table.integer('w');
      table.integer('l');
      table.integer('sv');
      table.integer('hld');
      table.float('era');
      table.integer('gs');
      table.integer('g');
      table.float('ip');
      table.integer('h');
      table.integer('er');
      table.integer('hr');
      table.integer('so');
      table.integer('bb');
      table.float('whip');
      table.float('k/9');
      table.float('bb/9');
      table.float('fip');
      table.float('war');
      table.float('adp');
      table.string('playerid').index();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('p')])
};
