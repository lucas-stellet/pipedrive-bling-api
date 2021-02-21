require('dotenv').config()

const express = require('express')
const cors = require('cors')

const mongoose = require('./database')

require('./api')(app)

const app = express()

const port = process.env.PORT ? process.env.PORT : 3000

app.use(express.json())
app.use(cors())

app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`Running on port ${port}...`)
})
