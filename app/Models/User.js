'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

const Database = use('Database')
class User extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }
  profile(){
    return this.hasOne('App/Models/Profile')
  }
  role(){
    return this.belongsTo('App/Models/Role')
  }
  async AddToDatabase(register_data){
    var x = await Database.table('users').insert(register_data);
  }
  comments(){
    return this.hasMany('App/Models/Comment')
  }
  posts(){
    return this.hasMany('App/Models/Post')
  }
}

module.exports = User
