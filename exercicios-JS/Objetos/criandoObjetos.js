 const produto = {} // Forma literal

 const produto2 = new Object // Objeto a partir do New

 function Produto(nome, preco, desc) { // Objeto com função construtora
     this.nome = nome
     this.getPrecoComDesconto = () => {
         return preco * (1 - desc)
     }
 }

const p1 = new Produto('Tenis', 156, 0.10)
console.log(p1.getPrecoComDesconto())

// função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Paulo Henrique', 26_596, 2)
console.log(f1.getSalario())

// Object.create

const filha = Object.create(null)
filha.nome = 'Nicols'
console.log(filha)