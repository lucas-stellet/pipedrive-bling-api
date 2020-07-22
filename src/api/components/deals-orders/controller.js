const deals = require('../deals/services')
const { serializeDeals, saveProductsOnDeals, convertToBlingOrder } = require('../../../helpers/pipedriveToBling')

const { convertToXML } = require('../../../helpers/convertData')

module.exports = {
  async createOrders (req, res) {
    const { status } = req.query

    const pipedriveDeals = await deals.getDealsByStatus(status)

    if (pipedriveDeals.data === null) {
      return res.json({ response: `No orders found with status ${status}` })
    }

    const serializedDeals = serializeDeals(pipedriveDeals.data)

    const dealsWithItens = await saveProductsOnDeals(serializedDeals)

    dealsWithItens.forEach(deal => {
      const order = convertToBlingOrder(deal)
      const xml = convertToXML(order)
    })

    // return res.send(xml)
  }
}
