let aprovados = new Array('Paulo', 'Henrique', 'Oliveira')
console.log(aprovados)

aprovados = ['THayane', 'Przybysewski', 'Machado']
console.log(aprovados)

aprovados[3] = 'Paulo'
aprovados.push('Henrique')
console.log(`O array ${aprovados} tem ${aprovados.length} elementos.`)

aprovados[9] = 'Oliveira' // Os indices vazios contam no length
console.log(`O array ${aprovados} tem ${aprovados.length} elementos.`)
console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['Paulo', 'Henrique', 'Oliveira']
aprovados.splice(2, 1)
console.log(aprovados)