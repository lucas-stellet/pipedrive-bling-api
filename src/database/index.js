const mongoose = require('mongoose')

mongoose.connect(
  'mongodb+srv://lustepe:<cpnoye11dZqFt9XA>@linkapi.zgb5y.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority',
  {
    useMongoClient: true
  }
)

mongoose.Promise = global.Promise

module.exports = mongoose
