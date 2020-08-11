const obj = {a:1, b:2, c:3, d:4, soma() { return this.a + this.b+ this.c+ this.d}}
console.log(obj.soma())
console.log(JSON.stringify(obj))

console.log(JSON.parse('{"a":1 ,"b":2 ,"c":3 ,"d":4}'))