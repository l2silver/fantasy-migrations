const tables = ['c', '1b', '2b', 'ss', '3b', 'rf', 'cf', 'lf', 'of'];
exports.up = function(knex, Promise) {  
  const results = tables.map((name) => knex.schema.createTable(name, function(table){
      table.string('name');
      table.string('team');
      table.integer('g');
      table.integer('pa');
      table.integer('ab');
      table.integer('h');
      table.integer('2b');
      table.integer('3b');
      table.integer('hr');
      table.integer('r');
      table.integer('rbi');
      table.integer('bb');
      table.integer('so');
      table.integer('hbp');
      table.integer('sb');
      table.integer('cs');
      table.float('avg');
      table.float('obp');
      table.float('slg');
      table.float('ops');
      table.float('woba');
      table.float('fld');
      table.float('bsr');
      table.float('war');
      table.float('adp');
      table.string('playerid').index();
    })
  )
  return Promise.all(results)
};

exports.down = function(knex, Promise) {
  return Promise.all(tables.map(name=>knex.schema.dropTable(name)))
};