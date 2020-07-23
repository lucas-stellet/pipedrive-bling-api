const convert = require('xml-js')
const moment = require('moment')

module.exports = {
  convertToXML (data) {
    const xml = convert.js2xml(data, {
      compact: true
    })
    return xml
  },
  convertDate (date, format) {
    return moment(date).format(format)
  }
}
