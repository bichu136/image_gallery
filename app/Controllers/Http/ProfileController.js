'use strict'
const Logger = use('Logger')
const User = use('App/Models/User')
class ProfileController {
  async show ({ auth, params,view}) {
    if (auth.user.id !== Number(params.id)) {
      return "You cannot see someone else's profile"
    }
    var arr = await User.query()
                    .where('id','=',auth.user.id)
                    .fetch();
    var x = arr.toJSON()
    var un = x[0].username
    var bias = x[0].bias
    Logger.info(un)
    Logger.info(bias)
    return view.render('profile',{username:un,bias:bias})
  }
}

module.exports = ProfileController
