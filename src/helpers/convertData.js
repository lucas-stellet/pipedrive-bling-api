const convert = require('xml-js')
const moment = require('moment')
module.exports = {
  convertToXML (data) {
    const xml = convert.js2xml(data, {
      compact: true,
      spaces: 4
    })

    return xml
  },
  convertDate (date) {
    return moment(date).format('DD/MM/YYYY')
  }
}
