const { parse } = require("path")

const num = [1,2,3,4,5]

let resultado = num.map(e => e%2 == 0 ? e*2 : e*3)

console.log(resultado)


const paraReal = real => real * 5.8
const real = valor => `R$ ${parseFloat(valor).toFixed(2).replace('.', ',')}`
resultado = num.map(paraReal).map(real)
console.log(resultado)