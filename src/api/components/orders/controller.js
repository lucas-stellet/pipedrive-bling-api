const { getOrders } = require('./services/index')

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
  }
}
