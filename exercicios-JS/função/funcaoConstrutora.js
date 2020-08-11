function Carro(velocidadeMaxima = 200, delta = 5){
    // Atributo privado usasse var ou let* ou const*, *preferencial
    let velocidadeAtual = 0

    //Metodo publico usasse o this.
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

function Bateria(amperes = 1000, volts = 25){
    let amperagem = 0

    this.carregar = function(tempo = 1) {
        if (amperagem + volts * tempo <= amperes){
            amperagem += volts * tempo
        } else {
            amperagem = amperes
        }
    }

    this.getCargaAtual= function() {
        return console.log(`A carga atual está em ${amperagem}`)
    }
}

const redmiNote4 = new Bateria(4000, 45)
redmiNote4.carregar(25)
redmiNote4.getCargaAtual()



const redmiK20pro = new Bateria(4500, 60)
redmiK20pro.carregar(45)
redmiK20pro.getCargaAtual()

console.log(typeof redmiNote4, typeof redmiK20pro)