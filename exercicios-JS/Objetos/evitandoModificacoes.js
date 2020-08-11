const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 156.45, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto) ? 'Sim' : 'Não')

produto.nome = 'Borracha'
produto.descricao = 'Borracha branca escolar'
delete produto.tag
console.log(produto)

const pessoa = { nome: 'Paulo', idade: 28}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa) ? 'Sim' : 'Não')
pessoa.sobrenome = 'Henrique'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

