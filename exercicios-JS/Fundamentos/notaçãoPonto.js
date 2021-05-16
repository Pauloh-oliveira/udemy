console.log(Math.round(6.7))
console.error('teste')

const obj1 ={}
obj1.nome = 'bola'
// obj1['nome'] = 'bola2'

function Obj(nome){
    this.nome = nome // Criando atributo publico
}

function Obj4(nome){
    this.nome = nome
}
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
const obj4 = new Obj4('Teste4')

console.log(obj1.nome, obj2.nome, obj3.nome)
console.log(obj4.nome)