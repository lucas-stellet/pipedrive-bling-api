const mongoose = require('mongoose')

const saleSchema = new mongoose.Schema({
  amount: {
    type: Number,
    trim: true
  },
  date: {
    type: String,
    trim: true
  }
},
{
  timestamps: true
})

const Sale = mongoose.model('Sale', saleSchema)

module.exports = Sale
