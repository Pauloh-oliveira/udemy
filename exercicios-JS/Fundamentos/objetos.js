const prod1 = {}
prod1.nome = 'Celular'
prod1.preço = 4896.56
console.log(prod1)

const pessoa = {
    nome : 'Paulo',
    salario: 26_789
}

console.log(pessoa)

const prod2 = {
    nome: 'bola',
    obj: {
        tipo: 'Couro',
        obj: {
            cor: 'azul'
        }
    }
}

console.log(prod2.obj.obj.cor)