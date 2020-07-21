const axios = require('axios')
const request = require('./request')

module.exports = {
  getAllDeals () {
    return axios(request('deals')).then(({ data }) => data)
  },

  getDealsByStatus (status) {
    return axios(request('deals', [{ key: 'status', value: status }])).then(({ data }) => data)
  }
}
