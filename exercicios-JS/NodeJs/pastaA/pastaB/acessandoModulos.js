const moduloA = require('../../moduloA')
const http = require('http')
console.log(moduloA.ola)

http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080)