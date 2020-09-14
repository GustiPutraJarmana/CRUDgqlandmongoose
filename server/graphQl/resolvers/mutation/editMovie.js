"use strict"

const Movie = require('../../../Model/Movie')

const editMovieById = async (_, args, root) => {
  try {
    const editedData = await Movie.findByIdAndUpdate({
      _id : args.input._id},
      {
        title : args.input.title,
        descrtion : args.input.descrtion,
        rate : args.input.rate,
        posterURL : args.input.posterURL,
        category : args.input.category
      },{
        new : true
      })
      console.log(editedData, 'ini result')
      return {
        data : editedData,
        message : `data has edited succesfull`,
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

module.exports = editMovieById
