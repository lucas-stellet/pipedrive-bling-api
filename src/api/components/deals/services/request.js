const { pipedrive } = require('../../../../config/tokensApi')

const apiEndpoint = 'https://lustepe.pipedrive.com/api/v1'

module.exports = (urlObject, parameters = {}) => {
  // console.log(`${apiEndpoint}/${urlObject}`)
  return {
    method: 'get',
    url: `${apiEndpoint}/${urlObject}`,
    params: {
      api_token: pipedrive,
      ...parameters
    }
  }
}
