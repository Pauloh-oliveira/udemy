var saudacao = 'opa'

function exec(){
    const saudacao = 'falaa'
    return saudacao
}
 const cliente ={
     nome: 'Paulo',
     idade: 28,
     peso: 105,
     endereço: {
         logradouro: 'Rua Antonio Gasparin',
         numero: 5310,
         complemento: 'apt 301'
     }
 }

 console.log(saudacao)
 console.log(exec())
 console.log(cliente.peso)

 const teste1 = 'Valor global'
const teste2 = 'Valor global de let'
 function testando(){
     console.log(teste2) // esse aqui nao funciona
    //  let teste2 = 'Valor local'
     console.log(teste2)
 }

 testando()