const pessoa = { name: 'Paulo'}
pessoa.name = 'Henrique'
console.log(pessoa.name)

// pessoa = {name: 'ana'}

Object.freeze(pessoa)

pessoa.name = 'maria'
pessoa.adress = 'rua tal'

console.log(pessoa)