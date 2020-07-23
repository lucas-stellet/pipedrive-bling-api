const convert = require('xml-js')
const moment = require('moment')
const fs = require('fs')

module.exports = {
  convertToXML (data) {
    const xml = convert.js2xml(data, {
      compact: true
    })
    return xml
  },
  convertDate (date) {
    return moment(date).format('DD/MM/YYYY')
  }
}
