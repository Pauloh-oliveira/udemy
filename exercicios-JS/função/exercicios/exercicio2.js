function triangulo(a,b,c){
    if (a == b && b == c && a == c){
        console.log(`Com os lados ${a} ${b} ${c} o triangulo é Equilátero. `)
    } else if (a != b && b != c && a != c){
        console.log(`Com os lados ${a} ${b} ${c} o triangulo é Escaleno`)
    } else {
        console.log(`Com os lados ${a} ${b} ${c} o triangulo é Isósceles`)
    }
}
triangulo(5,3,8)
triangulo(5,6,5)
triangulo(8,8,8)
triangulo(8,3,3)