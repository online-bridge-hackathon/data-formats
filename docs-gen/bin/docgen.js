#!/usr/bin/env node
'use strict'

const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const shins = require('../lib/shins')
const widdershins = require('../lib/widdershins')
const loadSpec = proj => yaml.safeLoad(fs.readFileSync(path.join(__dirname, `../../docs/${proj}/openapi.yaml`)))
const genDocs = proj => widdershins(loadSpec(proj))
  .then(widder => shins(widder))
  .then(html => fs.writeFileSync(path.join(__dirname, `../../docs/${proj}/slate/index.html`), html))

const argv = require('yargs')
  .array('options')
  .usage('Usage: $0 --proj [string] --all[boolean]')
  .example('$0 --proj dds', 'Gen docs for DDS project')
  .example('$0 --all', 'Gen docs for all projects')
  .help('h')
  .alias('h', 'help')
  .epilog('@data-formats')
  .argv

if (argv.all) {
  Promise.allSettled(fs.readdirSync(path.join(__dirname, `../../docs/`)).map(genDocs))
    .catch(console.error)
    .finally(() => process.exit())
} else if (argv.proj) {
  genDocs(argv.proj)
    .catch(console.error)
    .finally(() => process.exit())
}
