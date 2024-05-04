exports.up = function(knex) {
    return knex.schema.alterTable('characters', function(table) {
      table.boolean('main_character').defaultTo(false).alter();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.alterTable('characters', function(table) {
      table.dropColumn('main_character');
    });
  };
  