const { bling } = require('../../../../config/tokensApi')

const apiEndpoint = 'https://bling.com.br/Api/v2'

module.exports = (method, urlObject, xml) => {
  return {
    method,
    url: `${apiEndpoint}/${urlObject}/json`,
    params: {
      apikey: bling,
      xml
    }
  }
}
