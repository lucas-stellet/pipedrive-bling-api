const { Router } = require('express')
const { getSales } = require('./controller')

const router = Router()

router
  .post('/sales', getSales)

exports.router = router
