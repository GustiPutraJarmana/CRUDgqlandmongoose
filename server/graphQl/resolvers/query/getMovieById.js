"use strict"
const Movie = require('../../../Model/Movie')

const getMovieById = async (_, args, root) => {
  try {
    const dataGetMovieById = await Movie.findById(args.MovieId).exec()
    return dataGetMovieById
  } catch (error) {
    console.log(`error product : ${error}` )
    return error
  }
}

module.exports = getMovieById

