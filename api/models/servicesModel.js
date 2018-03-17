'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ServicesSchema = new Schema({
    userid:{type:String,required:true},
    username:{type:String,required:true},
    name:{type:String,minlength:5,required:true},
    note:{type:String,maxlength:255,minlength:5,required:true},
    desc:{type:String,maxlength:255,required:true},
    datetime:{type:Date,maxlength:255}
});

module.exports = mongoose.model('Services', ServicesSchema);
