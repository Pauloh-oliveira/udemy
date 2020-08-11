Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }

}



const aprovados = ['Paulo', 'Henrique','Oliveira', 'Motta', 'Ribeiro']
const numeros = [1,2,3,4,5,6,7,8,9]

aprovados.forEach2((valor, index, array) => console.log(`${index + 1}º - ${valor}`, array))
numeros.forEach2(n => console.log(2**n))