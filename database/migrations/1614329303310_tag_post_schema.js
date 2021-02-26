'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TagPostSchema extends Schema {
  up () {
    this.create('tag_post', (table) => {
      table.increments()
      table.integer('post_id')
      table.integer('tag_id')
      table.integer('pos_x_min')
      table.integer('pos_x_max')
      table.integer('pos_y_min')
      table.integer('pos_y_max')
      table.timestamps()
    })
  }

  down () {
    this.drop('tag_post')
  }
}

module.exports = TagPostSchema
