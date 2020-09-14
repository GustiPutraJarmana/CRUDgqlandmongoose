"use strict"
const Movie = require('../../../Model/Movie')

const getMovieById = async (_, args, root) => {
  try {
    const ID = args.MovieId
    const dataGetMovieById = await Movie.findById(ID).exec()
    return {
      data : dataGetMovieById,
      error : null
    }
  } catch (error) {
    console.log(`error product : ${error}` )
    return {
      data : null,
      error : error
    }
  }
}

module.exports = getMovieById

