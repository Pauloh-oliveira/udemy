function criarPessoas(){
    return {
        nome: 'paulo',
        sobrenome: 'Henrique'
    }
}

console.log(criarPessoas())

/* Função factory retorna um objeto literal, dentro de {} */

function criarPessoas2(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

const pessoa1 = criarPessoas2('Paulo', 'henrique')

console.log(pessoa1)