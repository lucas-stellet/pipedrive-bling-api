const { getAllDeals, getDealsByStatus, getDealsProducts } = require('./services/index')

module.exports = {
  async getDeals (req, res) {
    try {
      const deals = await getAllDeals()
      if (!deals) {
        return res.status(200).json({ response: 'No deals.' })
      }
      const { data } = deals
      return res.status(200).json({ data })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },

  async getWonDeals (req, res) {
    try {
      const deals = await getDealsByStatus('won')
      if (!deals) {
        return res.status(200).json({ response: 'No deals with this status.' })
      }
      const { data } = deals
      return res.status(200).json({ data })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },

  async getDealsProducts (req, res) {
    const { dealID } = req.query
    try {
      const products = await getDealsProducts(dealID)
      if (!products) {
        return res.status(200).json({ response: 'No products.' })
      }
      const { data } = products
      return res.status(200).json({ data })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}
