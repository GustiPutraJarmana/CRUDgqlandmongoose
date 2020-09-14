"use strict"
//Query
const getMovies = require('./query/getMovies')
const getMovieById = require('./query/getMovieById')

//Mutatition

const addMovie = require('./mutation/addMovie')
const deleteMovieById = require('./mutation/deleteMovie')
const editMovieById = require('./mutation/editMovie')

module.exports = {
  getMovies,
  getMovieById,
  addMovie,
  deleteMovieById,
  editMovieById
}