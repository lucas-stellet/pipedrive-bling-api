const { Router } = require('express')

const routes = Router()

routes
  .get('/getAllDeals')
  .get('/getWonDeals')

exports.exports = routes
