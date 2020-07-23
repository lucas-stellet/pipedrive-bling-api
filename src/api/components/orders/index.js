const { Router } = require('express')
const { getOrders, createOrders } = require('./controller')

const router = Router()

router
  .get('/orders', getOrders)
  .post('/createOrders', createOrders)

exports.router = router
