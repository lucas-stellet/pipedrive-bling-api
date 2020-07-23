const { Router } = require('express')
const { getSales } = require('./controller')

const router = Router()

router
  .get('/', getSales)

exports.router = router
