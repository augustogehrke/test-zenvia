
const toRoman = require('./toRoman')
const toNumber = require('./toNumber')

const numberRoman = toRoman.convert(154)
const numberInteger = toNumber.convert('X')

console.log(`Valor romano: ${numberRoman}`)
console.log(`Valor Numérico: ${numberInteger}`)
