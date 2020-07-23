const { getOrders } = require('./services/index')
const pipedrive = require('../deals/services')
const bling = require('../orders/services')
const { serializeDeals, saveProductsOnDeals, convertToBlingOrder } = require('../../../helpers/pipedriveToBling')

module.exports = {
  async getOrders (req, res) {
    try {
      const orders = await getOrders()

      if (Object.keys(orders) === 'erros') {
        const { cod, msg } = orders.erros[0].erro
        return res.status(200).json({
          response: {
            cod,
            msg
          }
        })
      }

      const ordersArray = orders.pedidos

      return res.status(200).json({ data: ordersArray })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },

  async createOrders (req, res) {
    const { status } = req.query

    const pipedriveDeals = await pipedrive.getDealsByStatus(status)

    if (pipedriveDeals.data === null) {
      return res.json({ response: `No orders found with status ${status}` })
    }

    const serializedDeals = serializeDeals(pipedriveDeals.data)

    const dealsWithItens = await saveProductsOnDeals(serializedDeals)

    const results = []

    for (let i = 0; i < dealsWithItens.length; i++) {
      const xml = convertToBlingOrder(dealsWithItens[i])
      const { data } = await bling.createOrders(xml)
      if (Object.keys(data) === 'erros') {
        results.push(data.erros)
      } else {
        results.push(data.pedidos)
      }
    }

    res.json(results)
  }
}
