const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angulas',{ framework: true})
console.log(tecnologias.get('react'))

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})