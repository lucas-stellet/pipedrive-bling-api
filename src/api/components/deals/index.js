const { Router } = require('express')
const { getDeals, getWonDeals, getDealsProducts } = require('./controller')

const router = Router()

router
  .get('/deals', getDeals)
  .get('/wonDeals', getWonDeals)
  .get('/dealsProducts', getDealsProducts)

exports.router = router
