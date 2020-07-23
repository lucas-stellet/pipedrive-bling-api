require('dotenv').config()

const express = require('express')

const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URI, {
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(() => {
    console.log('Mongo connected')
  })
  .catch(err => console.log(err))

const { router } = require('./api')

const app = express()

const port = process.env.PORT ? process.env.PORT : 3000

app.use(express.json())

app.use('/api', router)

app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`Running on port ${port}...`)
})
