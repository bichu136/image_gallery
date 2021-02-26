'use strict'
const User =use('App/Models/User')
const Profile = use('App/Models/Profile')
const Logger = use('Logger')
class RegisterController {
  async FillForm({request,response,view}){
    return view.render('register');
  }
  async AddToDatabase({request,view,response}){
    //get data_from_form
    const user = this.createUserData(request);
    await user.save();
    var profile = await this.createProfileForUser(user);
    //adding to database from model;
    await profile.save();
    return response.route('/login');
  }
  createUserData(request){
    var request_data = request.all();
    const user = new User();
    user.username =  request_data['username']
    user.password = request_data['password']
    user.role_id=2
    user.email = request_data['email']
    return user;
  }
  async createProfileForUser(user){
    var profile = new Profile();
    var rows = await User.query().where('email',user.email).fetch();
    var json = rows.toJSON();
    Logger.info(json);
    var uid = json[0].id
    Logger.info(uid);
    profile.user_id =uid;
    profile.bias ='';
    profile.tag_count = 0;
    profile.image_count = 0;
    return profile
  }
}
module.exports = RegisterController
