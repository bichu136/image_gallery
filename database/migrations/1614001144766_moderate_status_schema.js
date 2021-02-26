'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ModerateStatusSchema extends Schema {
  up () {
    this.create('moderate_statuses', (table) => {
      table.increments()
      table.string('name',3)
      table.timestamps()
    })
  }

  down () {
    this.drop('moderate_statuses')
  }
}

module.exports = ModerateStatusSchema
