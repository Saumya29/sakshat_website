'use strict'

const Schema = use('Schema')

class OrganisationsTableSchema extends Schema {

  up () {
    this.create('organisations', (table) => {
      table.increments()
      table.string('name').notNullable().unique()
      table.string('email').notNullable().unique()
      table.string('phone').notNullable()
      table.string('location').notNullable()
      table.float('credibility_score').defaultTo(0)
      table.string('website').nullable()
      table.text('description').nullable()
      table.string('image').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('organisations')
  }

}

module.exports = OrganisationsTableSchema
