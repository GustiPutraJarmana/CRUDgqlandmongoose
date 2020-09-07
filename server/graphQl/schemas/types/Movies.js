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
    error : String
  }

  type responseDeletMovie {
    data : Movie
    error : String
  }
`

module.exports = () => [movie]
