const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// Sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const euDepois = JSON.parse(conteudo)
    console.log(`O salario de ${euDepois.nome} até o final de 2021 é ${euDepois.salario}`)
})

const status = require('./arquivo.json')
console.log(status)

//Lendo todas as pastas do diretório
fs.readdir('../../../../', (err, arquivos) => {
    console.log(arquivos)
})