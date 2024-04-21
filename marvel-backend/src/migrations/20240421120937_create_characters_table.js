exports.up = function (knex) {
  return knex.schema.createTable("characters", function (table) {
    table.increments();
    table.string("name").notNullable();
    table.text("description");
    table.string("image_url");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("characters");
};
