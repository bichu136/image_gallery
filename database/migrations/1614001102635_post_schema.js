'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table.string('image_dir',1000).notNullable()
      table.string('source_url',1000)
      table.integer('moderate_status_id')
      table.integer('user_id')
      table.integer('related_post')
      table.integer('duplicating_post')
      table.timestamps()
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostSchema
