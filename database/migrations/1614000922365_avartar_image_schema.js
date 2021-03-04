'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AvartarImageSchema extends Schema {
  up () {
    this.create('avartar_images', (table) => {
      table.increments()
      table.string('images_path', 1000).notNullable().unique()
      table.integer('profiles_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('avartar_images')
  }
}

module.exports = AvartarImageSchema
