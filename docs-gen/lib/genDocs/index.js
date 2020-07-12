'use strict'

const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const loadSpec = require('../loadSpec')
const shins = require('../shins')
const widdershins = require('../widdershins')
const openApiSnippet = require('../openapiSnippet')
const DOCS_FOLDER = path.join(__dirname, `../../../docs/`)
const SLATE_OUTPUT = proj => path.join(DOCS_FOLDER, `${proj}/slate/index.html`)
const REDOC_OUTPUT = proj => path.join(DOCS_FOLDER, `${proj}/redoc/spec.yaml`)

module.exports = proj =>
/** Load Spec */
  loadSpec(proj)
  /** Convert to Markdown; Get Code Snippets */
    .then(spec => 
      Promise.all([widdershins(spec).then(shins), openApiSnippet(spec)]))
  /** Write Output */
    .then(([shinsHTML, enrichedSpec]) => Promise.all(
      [
        fs.writeFileSync(SLATE_OUTPUT(proj), shinsHTML),
        fs.writeFileSync(REDOC_OUTPUT(proj), yaml.safeDump(enrichedSpec))
      ]
    ))
