const porta = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancodeDados = require('./bancodeDados')

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(bancodeDados.getProdutos())
})

app.get('/produtos/:id/', (req, res, next) => {
    res.send(bancodeDados.getProduto(req.params.id))  // req.params local onde está os parametros da url
})

app.post('/produtos', (req, res, next) => {
    const produto = bancodeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})
app.listen(porta)