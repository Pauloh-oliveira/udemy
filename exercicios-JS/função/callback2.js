const notas = [4.5, 6.8, 5.6, 8.6, 8.1, 3.4]
const parImp = [1,2,3,4,53,8,5,4,1,2,5]

let notasBaixas2 = []

for (let i in notas){
    if (notas[i] < 7){
        notasBaixas2.push(notas[i])
    }
}

console.log(notasBaixas2)

// Com callback

const notasBaixas = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

let pares = parImp.filter(num => num % 2 == 0)
console.log(pares)



let aleatorios = []
function gerarNum(min = 0, max = 100, vezes = 10) {
    for(let i = 1; i <= vezes; i++) {
        aleatorios.push(Math.floor(Math.random() * (max - min +1) + min))
    }
}
gerarNum(0,150,50)
console.log(aleatorios)

let aleaImpar = aleatorios.filter(n1 => n1 % 3 != 0)
console.log(aleaImpar, `tem ${aleaImpar.length} numeros neste array.`)