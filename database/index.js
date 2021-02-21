const mongoose = require('mongoose)

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
  
export default mongoose
