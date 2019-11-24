const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.Promise = global.Promise;
mongoose.connection.openUri('mongodb://127.0.0.1/db_api_jwt', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// Express routes
app.use(routes)

app.listen(3000)