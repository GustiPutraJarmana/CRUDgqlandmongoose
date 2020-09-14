"use strict"
const Movie = require('../../../Model/Movie')

const getMovies = async () => {
  try {
    const dataMovies = await Movie.find({}, {}, {limit : 100})
    console.log(dataMovies, "ini data Movie")
    return {
      data : dataMovies,
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


module.exports = getMovies