exports.up = function (knex) {
  //up cria a tabela
  return knex.schema.createTable("ongs", function (table) {
    table.string("id").primary();
    table.string("nome").notNullable();
    table.string("email").notNullable();
    table.string("whatsapp").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
  });
};

exports.down = function (knex) {
  // down deleta
  return knex.schema.dropTable("ongs");
};
