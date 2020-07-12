'use strict'
const shins = require('util').promisify(require('shins').render)
let options = {}
options.cli = false // if true, missing files will trigger an exit(1)
options.minify = true
options.customCss = false
options.inline = true
options.unsafe = false // setting to true turns off markdown sanitisation
options['no-links'] = false // if true, do not automatically convert links in text to anchor tags
// options.source = filename; // used to resolve relative paths for included files
options.logo = './logo.png'
// options['logo-url'] = 'https://www.example.com'

module.exports = markdownString => shins(markdownString, options)
