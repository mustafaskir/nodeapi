var express = require('express'),
  app = express(),
  port = process.env.PORT || 2222,
  mongoose = require('mongoose'),
  Users = require('./api/models/userModel'), //created model loading here
  Services = require('./api/models/servicesModel')
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapi'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var routes = require('./api/routes/usersRoutes'); //importing route
var services = require('./api/routes/servicesRoute')

routes(app); //register the route
services(app)


app.listen(4444);


console.log('restapi running on : ' + port);
