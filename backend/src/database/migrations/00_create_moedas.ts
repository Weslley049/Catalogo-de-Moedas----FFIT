import Knex from 'knex';


export async function up(knex : Knex){
    return knex.schema.createTable('moedas', table => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.decimal('valor_mercado').notNullable();
        table.decimal('preco').notNullable();
        table.string('sigla').notNullable();
        table.string('descricao').notNullable();
    })



}


export async function down(knex : Knex) {
    return knex.schema.dropTable('moedas');
}