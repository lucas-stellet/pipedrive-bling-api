const axios = require('axios')
const request = require('./request')

module.exports = {
  getAllDeals () {
    return axios(request('deals')).then(({ data }) => data)
  },
  getDealsByStatus (status) {
    return axios(request('deals', { status: status })).then(({ data }) => data)
  },
  getDealsProducts (id) {
    return axios(request(`deals/${id}/products`)).then(({ data }) => data)
  }
}
