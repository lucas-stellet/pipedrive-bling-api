const { getAllDeals, getDealsByStatus } = require('./services/index')

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
  }
}
