'use strict'

class ProfileController {
  show ({ auth, params,view}) {
    if (auth.user.id !== Number(params.id)) {
      return "You cannot see someone else's profile"
    }
    return view.render('profile',{image:auth.user.id})
  }
}

module.exports = ProfileController
