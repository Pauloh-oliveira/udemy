const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.3, bolsista: true},
    {nome: 'Pedro', nota: 8.4, bolsista: false},
    {nome: 'Ana', nota: 6.3, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)
const soma = (a, b) => a + b
const numeros = [1,2,3,4,5,6,7,8,9]

console.log(numeros.reduce(soma))