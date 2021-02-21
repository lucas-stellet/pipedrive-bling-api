const { Router } = require('express')
const deals = require('./components/deals').router
const orders = require('./components/orders').router
const sales = require('./components/sales').router

const router = Router()

router.get('/pipedrive', deals)
router.get('/bling', orders)
router.get('/sales', sales)

exports.router = app => app.use(router)
