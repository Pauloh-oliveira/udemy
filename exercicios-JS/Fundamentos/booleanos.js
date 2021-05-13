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
console.log('6 ' + !![])
console.log('7 ' + !!{})
console.log('8 ' + !!Infinity)
console.log('9 ' + !!(isAtivo = true))

console.log('Os Falsos...')
console.log('10 ' + !!0)
console.log('11 ' + !!'')
console.log('12 ' + !!null)
console.log('13 ' + !!undefined)
console.log('14 ' + !!NaN)
console.log('15 ' + !!(isAtivo = false))

console.log('Para Finalizar...')
console.log('16 ' + !!('' || null || 0 || ' 5'))
nome = ''
console.log('17 ' + (nome || 'Desconhecido'))