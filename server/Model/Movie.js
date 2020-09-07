"use strict"
const { Schema, model } = require('mongoose');


const MovieSchema = new Schema({
  title : {
    type : String,
    required : [true, 'title is required']
  },
  description : {
    type : String,
    required : [true, 'description is required'],
    maxlength : [300, 'max length is 300 caracter']
  },
  rate : {
    type : Number,
    required : [true, 'rate is required'],
  },
  posterURL : {
    type : String,
    required : [true, 'postURL is required'],
  },
  category : {
    type : String,
    required : [true, 'category is required']
  }
},
{
  timestamps : true
})


module.exports = model('Movie', MovieSchema, 'Movie') // param1 = Name of collections, param2 = Name of Schema