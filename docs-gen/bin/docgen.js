#!/usr/bin/env node
'use strict'

const fs = require('fs')
const path = require('path')
const genDocs = require('../lib/genDocs')
const shins = require('../lib/shins')
const DOCS_FOLDER = path.join(__dirname, `../../docs/`)
const MAIN_INDEX_TEMPLATE = path.join(__dirname, `../templates/readme.html.md`)
const MAIN_INDEX_FILE = path.join(DOCS_FOLDER, `index.html`)
const FS_FORMAT = 'utf-8'

const argv = require('yargs')
  .array('options')
  .usage('Usage: $0 --proj [string] --all [boolean] --main [boolean]')
  .example('$0 -p dds', 'Gen docs for DDS project')
  .example('$0 -a', 'Gen docs for all projects')
  .example('$0 -m', 'Gen main(index) slate')
  .help('h')
  .alias('p', 'proj')
  .alias('a', 'all')
  .alias('m', 'main')
  .alias('h', 'help')
  .describe('p', 'Generate Docs for a given project')
  .describe('a', 'Generate Docs for all projects')
  .describe('m', 'Generate main index page')
  .nargs('p', 1)
  .epilog('@data-formats')
  .argv

argv.all
  ? Promise.allSettled(fs.readdirSync(DOCS_FOLDER).filter(f => fs.statSync(path.join(DOCS_FOLDER, f)).isDirectory()).map(genDocs))
    .then(results => results.map(console.info))
    .catch(console.error)
    .finally(() => process.exit())
  : argv.proj ? genDocs(argv.proj)
    .catch(console.error)
    .finally(() => process.exit())
    : argv.main
      ? shins(fs.readFileSync(MAIN_INDEX_TEMPLATE, FS_FORMAT))
        .then(md => fs.writeFileSync(MAIN_INDEX_FILE, md))
        .catch(console.error)
        .finally(() => process.exit())
      : process.exit()
