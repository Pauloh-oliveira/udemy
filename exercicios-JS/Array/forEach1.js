const aprovados = ['Paulo', 'Henrique','de', 'Sauru', 'Saurus']
const numeros = [1,2,3,4,5,6,7,8,9]

aprovados.forEach((valor, index, array) => console.log(`${index + 1}º - ${valor}`, array))
numeros.forEach(n => console.log(2**n))