"use strict"
const { connect } = require('mongoose')

const connectToDb = async () => {
  try {
    await connect('mongodb://localhost:27017/cinema', { useUnifiedTopology: true, useNewUrlParser: true})
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(error)
  }
}

module.exports = connectToDb