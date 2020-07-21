const { getAllDeals, getDealsByStatus } = require('./services/index')

module.exports = {
  async getDeals (req, res) {
    try {
      const deals = await getAllDeals()
      if (!deals) {
        return res.status(200).json({ response: 'No deals.' })
      }

      return res.status(200).json({ data: deals })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },

  async getWonDeals (req, res) {
    try {
      const deals = await getDealsByStatus('won')
      if (!deals.data) {
        return res.status(200).json({ response: 'No deals with this status.' })
      }

      return res.status(200).json({ data: deals.data })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}
