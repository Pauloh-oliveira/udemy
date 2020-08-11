const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50 }'
]

const jsonObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

resultado = carrinho.map(jsonObjeto).map(p => p.nome)
console.log(resultado)