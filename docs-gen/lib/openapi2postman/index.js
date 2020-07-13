'use strict'

const convert = require('util').promisify(require('openapi-to-postmanv2').convert)

module.exports = spec => convert({ type: 'json', data: spec })
  .then(({result, output, reason}) => (result && output[0].data) || Promise.reject(reason))
