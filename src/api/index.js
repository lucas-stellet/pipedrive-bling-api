const { Router } = require('express')
const deals = require('./components/deals').router
const orders = require('./components/orders').router

const router = Router()

router.use('/pipedrive', deals)
router.use('/bling', orders)

exports.router = router
