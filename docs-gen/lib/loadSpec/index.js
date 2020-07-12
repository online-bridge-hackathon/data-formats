'use strict'
const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const oasvalidator = require('oas-validator')
const AsyncApiValidator = require('asyncapi-validator')

module.exports = async proj => {
  if (fs.existsSync(path.join(__dirname, `../../../docs/${proj}/openapi.yaml`))) {
    try {
      const spec = yaml.safeLoad(fs.readFileSync(path.join(__dirname, `../../../docs/${proj}/openapi.yaml`)))
      await oasvalidator.validate(spec, {})
      return spec
    } catch (error) {
      Promise.reject(error)
    }
  } else if (fs.existsSync(path.join(__dirname, `../../../docs/${proj}/asyncapi.yaml`))) {
    try {
      const spec = yaml.safeLoad(fs.readFileSync(path.join(__dirname, `../../../docs/${proj}/asyncapi.yaml`)))
      await AsyncApiValidator.fromSource(spec)
      return spec
    } catch (error) {
      Promise.reject(error)
    }
  } else {
    Promise.reject(new Error('No spec found.'))
  }
}
