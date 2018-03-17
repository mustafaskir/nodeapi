'use strict';


var mongoose = require('mongoose'),
  Services = mongoose.model('Services');

/**
 * @get all services
 */
exports.services = function(req, res) {
  Services.find({}, function(err, services) {
    if (err)
      res.send(err);

    res.json(services);
  });
};

/**
 * @create new service
 */
exports.create_service = function(req,res){
    var new_service = new Services(req.body);
    new_service.save(function(err, service) {
      if (err)
        res.send(err);

      res.json(service);
    });
}


/**
 * @get all services for user by id
 */
exports.getServicesByUserId = function(req,res){
    let {userid} = req.body;
    Services.find({ userid },function(err,services){
        if(err)
            res.send(err);
        
        res.json(services)
    })
}

/**
 * @get service by id
 */
exports.getServiceById = function(req,res){
    let {_id} = req.params;
    Services.findById({ _id }, function(err, service) {
        if (err)
          res.send(err);

        res.json(service);
      });
}

/**
 * @update
 */
exports.update_service = function(req, res) {
    Services.findOneAndUpdate({_id: req.params._id}, req.body, {new: true},
    function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  };
  
/**
 * @delete
*/

exports.delete_service = function(req, res) {


    Services.remove({
      _id: req.params._id
    }, function(err, user) {
      if (err)
        res.send(err);

      res.json({ status:false,message: 'User successfully deleted' });
    });
  };
