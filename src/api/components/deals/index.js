const { Router } = require('express')
const { getDeals, getWonDeals } = require('./controller')

const router = Router()

router
  .get('/deals', getDeals)
  .get('/wonDeals', getWonDeals)

exports.router = router
