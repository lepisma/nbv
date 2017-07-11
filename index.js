#! /usr/bin/env node

const msee = require('msee')
const fs = require('fs')
const args = process.argv.slice(2)

let json = JSON.parse(fs.readFileSync(args[0], 'utf8'))

let strings = json.cells.map(cell => {
  let cellString = cell.source.join('')
  if (cell.cell_type === 'code') {
    cellString = '```\n' + cellString + '```'
  }
  return cellString
})

console.log(msee.parse(strings.join('\n')))
