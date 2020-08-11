const resultado = nota => nota >= 7 ? 'Aprovado': 'Reprovado'

console.log(resultado(8))
console.log(typeof resultado)

// const a = this
// console.log(a)

var b  = 'Testando o escopo global'
c = 'Tstando o escpo gloval com c'
d = 156
console.log(this.b, module.exports.b)
console.log(global.b)