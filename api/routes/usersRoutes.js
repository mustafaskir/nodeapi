'use strict';
module.exports = function(app) {
  var Users = require('../controllers/userController');


  /**
   * @route
   *  => get all users
   */
  app.route('/users')
    .get(Users.users)
    .post(Users.create_user);


    /**
     * @route
     *  =>get user by id
     */
  app.route('/users/:userId')
    .get(Users.read_user)
    .put(Users.update_user)
    .delete(Users.delete_user);

    /**
     * @route
     *  => login take object {username,password}
     */
    app.route('/login')
    .post(Users.login)

    /**
     * @route
     *  => register user take object { see required props in ../models/usersModel }
     */
    app.route('/register')
    .post(Users.create_user)

    
    /**
     * @route
     *  =>get user by username /username
     */
    app.route('/user/:username')
    .get(Users.getUserByUserName)
};
