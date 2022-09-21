/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex,Promise) {
    return knex.schema.createTable('notes', function(table) {
      table.increments();
      table.string('title').notNullable();
      table.string('content').notNullable();
      table.string('author').notNullable();
      table.boolean('is_deleted').defaultTo(false);
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function(knex, Promise) {
    return knex.schema.dropTable('notes');
};
