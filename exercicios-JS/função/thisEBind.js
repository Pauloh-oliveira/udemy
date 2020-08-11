const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}


const carro = {
    velocidade : 156,
    speed(){
        console.log(this.velocidade * Math.random())
    }
}
pessoa.falar()
const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

const ferrari = carro
ferrari.speed()
console.log(ferrari.velocidade)