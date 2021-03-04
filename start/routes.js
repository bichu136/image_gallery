'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager');
const LoginController = require('../app/Controllers/Http/LoginController');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/','MainPageController.mainPage');
Route.get('/api/1','OneController.one').as('x');
Route.get('/login','LoginController.view').middleware(['guest'])
Route.get('/login','LoginController.redirect').middleware(['auth'])


Route.get('register','RegisterController.FillForm')
Route.post('/register','RegisterController.AddToDatabase').as('new_member')
Route.post('/login', 'LoginController.login').middleware('guest')
Route.post('/logout','LoginController.logout').middleware(['auth'])
Route.get('users/:id', 'ProfileController.show').middleware('auth')

