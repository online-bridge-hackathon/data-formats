'use strict'
const converter = require('widdershins')
let options = {} // defaults shown
options.codeSamples = true
options.httpsnippet = false
// options.language_tabs = [];
// options.language_clients = [];
// options.loadedFrom = sourceUrl; // only needed if input document is relative
// options.user_templates = './user_templates';
options.templateCallback = function (templateName, stage, data) { return data }
options.theme = 'darkula'
options.search = true
options.sample = true // set false by --raw
options.discovery = false
options.includes = []
options.shallowSchemas = false
options.tocSummary = false
options.headings = 2
options.yaml = false
// options.resolve = false;
// options.source = sourceUrl; // if resolve is true, must be set to full path or URL of the input document

module.exports = apiObj => converter.convert(apiObj, options)
