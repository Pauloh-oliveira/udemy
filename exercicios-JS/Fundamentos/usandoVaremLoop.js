const funcs = []

for(var i = 0;i < 10;i++){
    funcs.push(function(){
        console.log(i)
    })
}
console.log(i, 'Aqui está fora')

funcs[2]()
funcs[8]()

console.log(funcs)


let numero = 10

{
    numero = 20
    console.log(numero)
}

console.log(numero)