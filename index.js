const parse = require('csv-parse/lib/sync');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const getNativeValues = row => `(${_.values(row).map((val)=>(isNaN(val) || val === '' ? `'${val.replace("'", '')}'` : val)).join(', ')})`
const getInsert = (position, properties, values)=>`INSERT INTO "${position}" (${properties.join(', ')}) VALUES ${values.join(', ')}`


module.exports.getPlayersInsert = (position)=>{
  const csv = fs.readFileSync(path.resolve(__dirname, '../../../Downloads', `${position}.csv`), 'utf8')
  // console.log('csv', csv)
  const parsedCSV = parse(csv, {columns: true})

  const properties = [
    'name',
    'team',
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
    'hbp',
    'sb',
    'cs',
    'avg',
    'obp',
    'slg',
    'ops',
    'woba',
    'fld',
    'bsr',
    'war',
    'adp',
    'playerid',
  ]
  const values = parsedCSV.map(getNativeValues)
  return getInsert(position, properties, values)
}

module.exports.getPitchersInsert = (position)=>{
  const csv = fs.readFileSync(path.resolve(__dirname, '../../../Downloads', `${position}.csv`), 'utf8')
  // console.log('csv', csv)
  const parsedCSV = parse(csv, {columns: true})

  const properties = [
    'name',
    'team',
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
    'war',
    'adp',
    'playerid',
  ]

  const values = parsedCSV.map(getNativeValues)

  return getInsert(position, properties, values)
}