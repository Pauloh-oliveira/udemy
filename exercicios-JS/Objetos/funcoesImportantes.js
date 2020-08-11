const pessoa = {
    nome: 'Paulo',
    idade: 28,
    peso: 105
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '21/10/1991'
})

pessoa.dataNascimento = '23/10/1568'
console.log(pessoa.dataNascimento)

const destino = {a: 1}
const ob1 = {b: 2}
const ob2 = {c:3, a:5}
const obj = Object.assign(destino, ob1, ob2)
console.log(destino, obj)