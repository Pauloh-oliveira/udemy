const fs = require('fs')

const pessoa = {
    nome: 'Paulo Henrique',
    cargo: 'Desenvolvedor fullstack',
    salario: 26.982
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(pessoa), err => {
    console.log(err || 'Arquivo salvo!')
})