'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UsersSchema = new Schema({
  username:{type:String,unique:true,minlength:5,required:true},
  name:{type:String,maxlength:255,minlength:5,required:true},
  password:{type:String,maxlength:255,required:true},
  email:{type:String,maxlength:255,required:true},
  address:{type:String,maxlength:255},
  age:{type:Date},
  jobtitle:String
});

module.exports = mongoose.model('Users', UsersSchema);
