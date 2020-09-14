"use strict"
const Movie = require('../../../Model/Movie')

const addMovie = async (_, args, root) => {
  try {
    const dataInsert = {
      title : args.input.title,
      description : args.input.description,
      rate : args.input.rate,
      posterURL : args.input.posterURL,
      category : args.input.category
    }
    const insertDataMovie = await Movie.create(dataInsert)
    console.log(insertDataMovie, 'ini insert data movie')
    return {
      data : insertDataMovie,
      message : `Added data with tittle ${insertDataMovie.title} is succefull`,
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


module.exports = addMovie