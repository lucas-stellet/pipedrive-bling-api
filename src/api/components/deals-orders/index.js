const { Router } = require('express')
const { createOrders } = require('./controller')

const router = Router()

router
  .post('/createOrders', createOrders)

exports.router = router
