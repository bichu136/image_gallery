'use strict'
const User =use('App/Models/User')
class RegisterController {
  async FillForm({request,response,view}){
    return view.render('register');
  }
  async AddToDatabase({request,view,response}){
    //get data_from_form
    var request_data = request.all();
    var user = new User();
    user.username =  request_data['username']
    user.password = request_data['password']
    user.email = request_data['email']
    user.save();
    //adding to database from model;
    return response.route('/login');
  }
}
module.exports = RegisterController
