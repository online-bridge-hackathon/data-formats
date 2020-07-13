'use strict'

const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const oasvalidator = require('oas-validator')
const AsyncApiValidator = require('asyncapi-validator')
const OPENAPI_PATH = proj => path.join(__dirname, `../../../docs/${proj}/openapi.yaml`)
const ASYNCAPI_PATH = proj => path.join(__dirname, `../../../docs/${proj}/asyncapi.yaml`)

module.exports = async proj => {
  if (fs.existsSync(OPENAPI_PATH(proj))) {
    try {
      const spec = yaml.safeLoad(fs.readFileSync(OPENAPI_PATH(proj)))
      await oasvalidator.validate(spec, {})
      return spec
    } catch (error) {
      Promise.reject(error)
    }
  } else if (fs.existsSync(ASYNCAPI_PATH(proj))) {
    try {
      const spec = yaml.safeLoad(fs.readFileSync(ASYNCAPI_PATH(proj)))
      await AsyncApiValidator.fromSource(spec)
      return spec
    } catch (error) {
      Promise.reject(error)
    }
  } else {
    Promise.reject(new Error('No spec found.'))
  }
}
