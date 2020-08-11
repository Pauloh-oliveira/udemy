const soma = function (x = 10,y = 20){
    return x + y
}

const imprimirResultado = function (a,b, operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(3,4) 
imprimirResultado(3,4,soma)
imprimirResultado(3,4, function (f,l) {
    return f*l
})
imprimirResultado(3,4, (d,i) => d)