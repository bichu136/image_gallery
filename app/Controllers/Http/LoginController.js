'use strict'

const { route } = require("@adonisjs/framework/src/Route/Manager")
const Logger = use('Logger')
class LoginController {
  async view({view}){
    return view.render('login');
  }
  async login ({ auth, request,response }) {
    const x = request.all()
    var b = true
    await auth.attempt(x['username'], x['password']).catch( ()=>{Logger.info('auth.attempt failed');b=false})
    if (b){
      Logger.info('auth.attempt done')
      var users_url = '/users/'+auth.user.id;
      return response.redirect(users_url);
    }
    else{
      return 'login failed';
    }

  }

  redirect({auth,response}){
    if (auth.user){
      return response.route('LoginController.show')
    }
  }
  async logout({auth,response}){
    var x = await auth.logout()
    return response.redirect('/login')
  }
}

module.exports = LoginController
