'use strict'
const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const oasvalidator = require('oas-validator')

module.exports = async proj => {
  try {
    const spec = yaml.safeLoad(fs.readFileSync(path.join(__dirname, `../../../docs/${proj}/openapi.yaml`)))
    await oasvalidator.validate(spec, {})
    return spec
  } catch (error) {
    Promise.reject(error)
  }
}
