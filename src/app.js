const express = require('express')

const { router } = require('./api/index')

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
