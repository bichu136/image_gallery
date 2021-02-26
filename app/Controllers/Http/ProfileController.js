'use strict'
const Logger = use('Logger')
const User = use('App/Models/User')
const Profile = use ('App/Models/Profile')
class ProfileController {
  async show ({ auth, params,view}) {
    if (auth.user.id !== Number(params.id)) {
      return "You cannot see someone else's profile"
    }
    var user = await User.find(auth.user.id);
    // var profile = user.profile().fetch();

    return view.render('profile',{username:user.username,bias:''})
  }
}

module.exports = ProfileController
