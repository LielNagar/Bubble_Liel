/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('notes').del()
  await knex('notes').insert([
    {id: 1, title: 'DB Build', content: 'Build a DB', author:'liel'},
    {id: 2, title: 'Post command', content: 'Make post command', author:'liel'},
    {id: 3, title: 'Get all command', content: 'Make get all command', author:'liel'}
  ]);
};
