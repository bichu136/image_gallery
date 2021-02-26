'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Profile extends Model {
  avartar_images(){
    return this.hasMany('App/Models/AvartarImage')
  }
}

module.exports = Profile
