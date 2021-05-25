// this.ola = 'Fala pessoal'
// exports.bemVindo = 'Bem vindo ao node'
// module.exports.ateLogo = 'Até o proximo exemplo'
module.exports = function(nome) {
    return console.log(nome)
}

console.log(exports == this)