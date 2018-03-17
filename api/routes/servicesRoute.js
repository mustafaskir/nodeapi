'use strict';
module.exports = function(app) {
  var Services = require('../controllers/servicesController');


  /**
   * @route
   *    => view all services
   */
  app.route('/services')
    .get(Services.services);
  
/**
 * @route
 *    => create new service by userid
*/
    app.route('/services/create')
        .post(Services.create_service);
    
  /**
   * @route
   *    => view all services for specific user
   */
    app.route('/services/user/')
        .post(Services.getServicesByUserId)


    /**
     * @route
     *  => get service by id /id
     */
    app.route('/services/:_id')
        .get(Services.getServiceById)
        .put(Services.update_service)
        .delete(Services.delete_service)
};
