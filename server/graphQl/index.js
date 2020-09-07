"use strict"


const { gql } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const moviesTypeSchema = require('./schemas/types/Movies');

const { getMovies, getMovieById, addMovie } = require('./resolvers');

const schemaDefinition = gql`
type Query {
  getMovies : [Movie]
  getMovieById( MovieId : ID ) : Movie
}

type Mutation {
  addMovie(input : newDataMovie) : reponseAddMovie
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
      addMovie
    }
  }
})

module.exports = schema


