const parse = require('csv-parse/lib/sync');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const getValue = (p, row)=>(row[p] === undefined ? (row[p.toUpperCase()] || row[p.toUpperCase().replace(/"/g, '')] ): row[p])

const getNativeValues = (row, properties) => `(${properties.map((p)=>getValue(p, row)).map((val)=>(isNaN(val) || val === '' ? `'${(val || '').replace("'", '')}'` : val)).join(', ')})`

const getInsert = (position, properties, values)=>`INSERT INTO "${position}" (${properties.map(x=>x.toLowerCase()).join(', ')}) VALUES ${values.join(', ')}`


const playerProperties = [
  'Name',
  'Team',
  'g',
  'pa',
  'ab',
  'h',
  '"2b"',
  '"3b"',
  'hr',
  'r',
  'rbi',
  'bb',
  'so',
  'sb',
  'cs',
  'avg',
  'obp',
  'adp',
  'playerid',
]

module.exports.getPlayersInsert = (position)=>{
  const csv = fs.readFileSync(path.resolve(__dirname, '../../../Downloads', `${position}.csv`), 'utf8')
  // console.log('csv', csv)
  const parsedCSV = parse(csv, {columns: true})

  const values = parsedCSV.map((val)=>getNativeValues(val, playerProperties))
  return getInsert(position, playerProperties, values)
}

const pitcherProperties = [
  'Name',
  'Team',
  'w',
  'l',
  'sv',
  'hld',
  'era',
  'gs',
  'g',
  'ip',
  'h',
  'er',
  'hr',
  'so',
  'bb',
  'whip',
  '"k/9"',
  '"bb/9"',
  'fip',
  'adp',
  'playerid',
]

module.exports.getPitchersInsert = (position)=>{
  const csv = fs.readFileSync(path.resolve(__dirname, '../../../Downloads', `${position}.csv`), 'utf8')
  // console.log('csv', csv)
  const parsedCSV = parse(csv, {columns: true})

  

  const values = parsedCSV.map(val=>getNativeValues(val, pitcherProperties))

  return getInsert(position, pitcherProperties, values)
}