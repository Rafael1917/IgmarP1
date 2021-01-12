'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonSchema extends Schema {
  up () {
    this.create('people', (table) => {
      table.string('Nombre', 80).notNullable()
      table.string('ApPa', 80).notNullable()
      table.string('ApMa', 80).notNullable()
    })
  }

  down () {
    this.drop('people')
  }
}

module.exports = PersonSchema
