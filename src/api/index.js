const { Router } = require('express')
const deals = require('./components/deals').router

const router = Router()

router.use('/deals-pipedrive', deals)

exports.router = router
