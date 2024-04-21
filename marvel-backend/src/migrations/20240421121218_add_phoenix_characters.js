exports.up = function (knex) {
  return knex.schema.table("characters", function (table) {
    table.boolean("main_character").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.table("characters", function (table) {
    table.dropColumn("main_character");
  });
};
