function tratarErroELançar(erro){
    // throw new Error('Testando o erro')
    throw 10
}

function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase()+ '!!!!')
    } catch (e) {
        tratarErroELançar(e)
        // console.log(e.sorted)
    } finally {
        console.log('Chegou ao final.')
    }
}

const obj = {nome: 'Paulo'}
imprimirNomeGritado(obj)
