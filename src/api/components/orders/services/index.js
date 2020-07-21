const axios = require('axios')
const request = require('./request')

module.exports = {
  getOrders () {
    return axios(request('pedidos')).then(({ data }) => data.retorno)
  }
}
