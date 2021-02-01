function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true) ) 

const repetir = (frase, vezes) => {
    for( let i = 0; i < vezes; i++){
        console.log(`${frase}`)
    }
}

repetir('*', 6)