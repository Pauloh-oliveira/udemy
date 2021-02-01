const pessoa = {
    nome: 'Paulo',
    idade: 28,
    endereço: {
        rua: 'asd zxc',
        numero: 5310
    }
}

const { nome, idade} = pessoa // transfornmo o atributo nome e idade em variaveis do objeto pessoa

console.log(nome, idade)

const {nome: n, idade: i} = pessoa // muda o nome da variável

console.log(n, i)

const {sobrenome} = pessoa
console.log(sobrenome)

const {sobrenome: s} = pessoa
console.log(s)

const {endereço: { rua, numero, cep}} = pessoa
console.log(rua, numero, cep)