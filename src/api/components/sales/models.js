const mongoose = require('mongoose')

const saleSchema = new mongoose.Schema({
  amount: {
    type: Number,
    trim: true
  },
  date: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
},
{
  timestamps: true
})

const Sale = mongoose.model('Sale', saleSchema)

module.exports = Sale
