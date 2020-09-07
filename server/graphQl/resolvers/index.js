"use strict"
//Query
const getMovies = require('./query/getMovies')
const getMovieById = require('./query/getMovieById')

//Mutatition

const addMovie = require('./mutation/addMovie')

module.exports = {
  getMovies,
  getMovieById,
  addMovie
}