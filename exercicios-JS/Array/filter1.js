const produtos = [
    {nome: 'Placa Mãe', preco: 1330.09, fragil: true},
    {nome: 'Ryzen 9 3900x', preco: 2287.79, fragil: true},
    {nome: 'Corsair', preco: 1691.89, fragil: false},
    {nome: 'BarraCuda', preco: 824.64, fragil: false}
]

console.log(produtos.filter(e => e.preco < 1500 && e.fragil))

console.log(produtos.map(a => a.preco).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}))

const todosFrageis = (resultado, fragil) => resultado && fragil
console.log(produtos.map(a => a.fragil).reduce(todosFrageis))

const algumFragil = (resultado, fragil) => resultado || fragil
console.log(produtos.map(a => a.fragil).reduce(algumFragil))