const pilotos = [ 'Vettel', 'Alonso', 'Raikkonen', 'Massa']
// pilotos.splice(1, 0, 'Verstappen')
pilotos.pop() // Remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // o primeiro (1) é incluído, o segundo (4) é excluído
console.log(algunsPilotos2)