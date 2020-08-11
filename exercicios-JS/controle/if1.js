function verdade(valor){
    if (valor){
        console.log('verdade', valor)
    } else {
        console.log('falso', valor)
    }
}

verdade({nome: ''})