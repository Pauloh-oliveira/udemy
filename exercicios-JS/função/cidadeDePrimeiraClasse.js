const mult = function(a, b){return a *b}

console.log(mult(5,3))

const array = [function (a,b) {return a + b}, mult]

console.log(array[0](5,8),mult(2,5))

const obj = {}
obj.falar = function(){console.log('Testando 123...')}
console.log(obj.falar())

function soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
}

soma(2,3)(8)

