const { Schema } = require('mongoose')

module.exports = new Schema({
  internalObservation: String,
  date: Date,
  saler: String,
  paymentValue: Number,
  customer: Object,
  itens: Array,
  pipedriveDealId: String,
  pipedriveResponseId: {
    type: Schema.Types.ObjectId,
    ref: 'PipedriveDeal'
  },
  blingResponseId: {
    type: Schema.Types.ObjectId,
    ref: 'BlingOrder'
  }
})
