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

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)