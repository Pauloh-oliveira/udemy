const fabricantes = ['Mercedes', 'Audi', 'BMW' ]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricantes => console.log(fabricantes))
fabricantes.forEach((fabricantes, posição, umArray) => console.log( posição+1 ,fabricantes, `Aqui tem um array? ${umArray}`))