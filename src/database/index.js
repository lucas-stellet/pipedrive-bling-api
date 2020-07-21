const mongoose = require('mongoose')

mongoose.connect(
  process.env.DB_URI,
  {
    useMongoClient: true
  }
)

mongoose.Promise = global.Promise

module.exports = mongoose
