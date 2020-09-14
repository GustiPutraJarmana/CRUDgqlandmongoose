"use strict"


const { gql } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const moviesTypeSchema = require('./schemas/types/Movies');

const { getMovies, getMovieById, addMovie, deleteMovieById, editMovieById } = require('./resolvers');

const schemaDefinition = gql`
type Query {
  getMovies : Movies
  getMovieById( MovieId : ID ) : responseMovieById
}

type Mutation {
  addMovie(input : newDataMovie) : reponseAddMovie
  deleteMovieById( MovieId : ID ) : responseDeletMovie
  editMovieById(input : dataToEdit ) : responseEditMovie
}


schema {
  query : Query
  mutation : Mutation
}
`

const schema = makeExecutableSchema({
  typeDefs : [
    schemaDefinition,
    moviesTypeSchema
  ],
  resolvers : {
    Query : {
      getMovies,
      getMovieById
    },
    Mutation : {
      addMovie,
      deleteMovieById,
      editMovieById
    }
  }
})

module.exports = schema


