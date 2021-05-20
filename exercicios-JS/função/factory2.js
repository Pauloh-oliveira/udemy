function criarProdutos(nome, preco){
    return {
        nome,
        preco,
        desconto : (8 * preco) / 100
    }
}

const carro = criarProdutos('Tesla', 1_000_000)
const carro2 = criarProdutos('Ferrari', 500_000)
console.log(carro, carro2)

function criarPessoas(nome, sobrenome, civil){
    return {
        nome,
        sobrenome,
        civil
    }
}

const namorada = criarPessoas('Thayane', 'Machado', 'Casada com Paulo')
console.log(namorada)

function criarPc(placaMae, processador, gpu) {
    return {
        placaMae,
        processador,
        gpu
    }
}

const pc2021 = criarPc('b550', 'Ryzen 5800x', 'RTX3070')
console.log(pc2021)