const { pipedrive } = require('../../../config/tokensApi')

const apiEndpoint = 'https://lustepe.pipedrive.com/api/v1'

module.exports = (urlObject, [...parameters]) => {
  let parametersString = ''

  parameters.forEach(({ key, value }) => {
    parametersString += `${key}: ${value}`
  })

  return {
    method: 'get',
    url: `${apiEndpoint}/${urlObject}&${parametersString}`,
    params: {
      api_token: pipedrive
    }
  }
}
