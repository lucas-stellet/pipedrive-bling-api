const axios = require('axios')
const request = require('./request')

module.exports = {
  getOrders () {
    return axios(request('get', 'pedidos')).then(({ data }) => data.retorno)
  },
  createOrders (xml) {
    return axios(request('post', 'pedido', xml)).then(({ status, data }) => {
      return { data: data.retorno }
    })
  }
}
