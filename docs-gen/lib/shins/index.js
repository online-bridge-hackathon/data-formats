'use strict'

const shins = require('util').promisify(require('shins').render)
const path = require('path')
const LOGO_PATH = path.join(__dirname, '../../../docs/logo.png')
let options = {
  cli: false, // if true, missing files will trigger an exit(1)
  minify: true,
  customCss: false,
  inline: true,
  unsafe: false, // setting to true turns off markdown sanitisation
  logo: LOGO_PATH
  // options['logo-url'] : 'https://www.example.com'
}

module.exports = markdownString => shins(markdownString, options)
