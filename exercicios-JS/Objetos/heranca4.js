function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__) // Dois objetos criados a partir da mesma função compartilham o mesmo __proto__
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anonimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Paulo'
console.log(obj2.nome)

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'obj3'
obj3.falar()

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.prototype.__proto__ === Object.prototype)