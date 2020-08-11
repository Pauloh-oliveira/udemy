function aleatorio(min, max){
    const valor = Math.random() * (max - min +1) + min
    return Math.floor(valor)
}
let valor = null
c = 1
var lista = []
while (valor != 55){
    valor = aleatorio(0,100)
    console.log(`Sortiado ${valor} - x${c}`)
    c++
    lista.push(valor)
    }

console.log(lista)


res = 'S'
entrada = 'Ss'

// if( res in entrada){ // comportamento difenrete do Python, aqui o IN intera em toda a estrutura
//     console.log('Sim')
// } else {
//     console.log('Não')
// }