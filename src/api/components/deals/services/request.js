const { pipedrive } = require('../../../../config/tokensApi')

const apiEndpoint = 'https://lustepe.pipedrive.com/api/v1'

module.exports = (urlObject, parameters = {}) => {
  return {
    method: 'get',
    url: `${apiEndpoint}/${urlObject}`,
    params: {
      api_token: pipedrive,
      ...parameters
    }
  }
}
