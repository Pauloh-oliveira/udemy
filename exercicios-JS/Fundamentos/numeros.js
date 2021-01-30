const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const ava1 = 7.7895
const ava2 = 9.5423

const total = ava1 * peso1 + ava2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2)) // converte para binario
console.log(media.toString(16)) // converte para hexadecimal
console.log(media.toString(8)) // converte para octal