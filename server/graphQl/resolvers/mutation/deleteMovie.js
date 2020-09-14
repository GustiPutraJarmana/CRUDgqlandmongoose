"use strict"
const Movie = require('../../../Model/Movie')

const deleteMoviebyId = async (_, args, root) => {
  try {
    const ID = args.MovieId
    const dataDeleted = await Movie.deleteOne({_id : ID})
    if (dataDeleted.n === 1 && dataDeleted.deletedCount === 1) {
      return {
        message : `delete data is succesful`,
        error : null
      } 
    } else {
        return {
          message : `data is not found`,
          error : null
        }
    }
  } catch (error) {
    console.log(`error product : ${error}` )
    return {
      data : null,
      error : error
    }
  }
}

module.exports = deleteMoviebyId