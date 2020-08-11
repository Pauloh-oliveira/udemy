console.log(Math.round(6.7))

const obj1 ={}
obj1.nome = 'bola'
// obj1['nome'] = 'bola2'

function Obj(nome){
    this.nome = nome // Criando atributo publico
}
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome, obj3.nome)