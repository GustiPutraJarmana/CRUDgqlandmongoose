"use strict"

let movie = `
  type Movie {
    _id : ID
    title : String
    description : String
    rate : Int
    posterURL : String
    category : String
  }

  type Movies {
    data : [Movie]
    error : String
  }

  input MovieId {
    _id : ID
  }

  type responseMovieById {
    data : Movie
    error : String
  }

  input newDataMovie {
    title : String
    description : String
    rate : Int
    posterURL : String
    category : String
  }

  type reponseAddMovie {
    data : Movie
    message : String
    error : String
  }

  type responseDeletMovie {
    message : String
    error : String
  }

  input dataToEdit {
    _id : ID
    title : String
    description : String
    rate : Int
    posterURL : String
    category : String
  }

  type responseEditMovie {
    data : Movie
    message : String
    error : String
  }
`

module.exports = () => [movie]
