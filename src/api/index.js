const { Router } = require('express')
const deals = require('./components/deals').router
const orders = require('./components/orders').router
const dealsOrders = require('./components/deals-orders').router

const router = Router()

router.use('/pipedrive', deals)
router.use('/bling', orders)
router.use('/pipedrive-to-bling', dealsOrders)

exports.router = router
