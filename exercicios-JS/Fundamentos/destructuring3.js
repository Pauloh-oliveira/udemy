function rand({min = 0, max = 1000}){
    const valor = Math.random()*(max - min) + min
    return Math.floor(valor)
}

const obj = {max : 50, min: 70}
console.log(rand(obj))
console.log(rand({min: 55, max: 75}))
console.log(rand({min: 16, max: 3587}))
console.log(rand({min: 50, max: 10}))