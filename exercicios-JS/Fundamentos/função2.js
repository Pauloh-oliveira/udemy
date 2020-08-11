const soma = function(a=0,b){
    return a + b 
}
console.log(soma(10,2153))

//função arrow

const soma2 = (a,b) => {
    return a + b
}
console.log(soma2(2,3))



// arrow com retorno implicito
const soma3 = (a,b) => a+b

console.log(soma3(156,153))

const imprimir = a => console.log(a)

imprimir('Testando')