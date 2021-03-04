'use strict'
const User = use('App/Models/User')
class MainPageController {
  async mainPage({request,response,auth,view}){
    if (auth.check()){
      var user = await User.find(auth.user.id);
      return view.render('mainpage',{username:user.username})
    }
    else{
      view.render('mainpage',{username:''})
    }
  }
}

module.exports = MainPageController
