const { bling } = require('../../../../config/tokensApi')

const apiEndpoint = 'https://bling.com.br/Api/v2'

module.exports = (urlObject) => {
  return {
    method: 'get',
    url: `${apiEndpoint}/${urlObject}/json`,
    params: {
      apikey: bling
    }
  }
}
