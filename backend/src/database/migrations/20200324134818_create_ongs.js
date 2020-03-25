
exports.up = function(knex) {
    return knex.schema.createTable("ongs", function(table){
        table.string("id").primary();
        table.string("name").notNull();
        table.string("email").notNull();
        table.string("whatsapp").notNull();
        table.string("city").notNull();
        table.string("uf", 2).notNull();

        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());  
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable("ongs");
};
