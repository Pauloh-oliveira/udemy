function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min + 1) + min
    // console.log(max)
    return Math.floor(valor)
}

console.log(rand([50,40])) // tera a inversão
console.log(rand([785]))
console.log(rand([, 452]))
console.log(rand([]))
// console.log(rand()) // esse dará erro
console.log(rand([1244]))
console.log(true || false)