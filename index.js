#!/usr/bin/env node

var preview = require('ribcage-preview')
  , gen = require('ribcage-gen')
  , path = require('path')
  , fs = require('fs')

switch (process.argv[2]) {
  case 'preview':
    preview(path.join(process.cwd(), process.argv[3]))
    break
  case 'gen':
    gen(process.argv[3], function () {
      console.log('created')
    })
    break
  default:
    console.log(fs.readFileSync('./help.txt', {encoding: 'utf8'}))
}
