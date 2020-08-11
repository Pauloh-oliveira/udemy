console.log(`estou
testando
as                  coisas                  `)

var validador = false
var teste = function(valor){
    if (validador == true){
        return `Teste com verdadeiro ${valor}`
    } else{
        return `teste com falso ${valor * 5}`
    }
}

console.log(`estou testando o template string ${teste(12)}`)