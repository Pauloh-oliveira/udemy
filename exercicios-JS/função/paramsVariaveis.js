function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    console.log(soma)
}

soma(1,2,3,2,5,4,645,645,645,6456,45,64,5645,645,64,564,564,564,5)
soma('a', 'b')

const a = () => console.log('teste abc')
a()