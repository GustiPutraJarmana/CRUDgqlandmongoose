"use strict"

const express = require(`express`);
const app = express();
const port = 4000;
const cors = require('cors');
const { ApolloServer, gql } = require('apollo-server-express')

const connectToDb = require('./config/config');
const schema = require('./graphQl')

app.use(cors())
app.use(express.urlencoded({extended : true}))


//connect to graphQl
const server = new ApolloServer({
  schema,
  context : ({req, res, next}) => {
    return req
  },
  introspection : true, // => logging
  playground : true // => testing API (imsonia / postman)
})

server.applyMiddleware({
  app,
  path: '/',
})


// connect to DB & start API
async function start() {
  try {
    await connectToDb();
    app.listen(port, () => console.log(`server listerning to port ${port}`) )
  } catch (error) {
    console.log(error)
  }
};

start()
