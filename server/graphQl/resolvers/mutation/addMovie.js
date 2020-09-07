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
  } catch (error) {
    console.log(`error product : ${error}` )
    return error
  }
}


module.exports = addMovie