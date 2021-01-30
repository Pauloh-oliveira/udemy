let isAtivo = 1
console.log(!!isAtivo)

if (isAtivo == true){
    console.log('valor verdadeiro')
} else {
    console.log('Valor falso')
}
console.log('1 ' + !!'')

console.log('2 ' + 'Os verdadeiros...')
console.log('3 ' + !!3)
console.log('4 ' + !!-1)
console.log('5 ' + !!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os Falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!undefined)
console.log(!!NaN)
console.log(!!(isAtivo = false))

console.log('Para Finalizar...')
console.log(!!('' || null || 0 || ' 5'))
nome = 'paulo'
console.log(nome || 'Desconhecido')