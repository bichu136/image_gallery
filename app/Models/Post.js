'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Post extends Model {
  tags () {
    return this.belongsToMany('App/Models/Tag','post_id','tag_id').pivotTable('tag_post');
  }
  comments(){
    return this.hasMany('App/Models/Comment')
  }

}

module.exports = Post
