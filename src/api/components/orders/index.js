const { Router } = require('express')
const { getOrders } = require('./controller')

const router = Router()

router
  .get('/orders', getOrders)

exports.router = router
