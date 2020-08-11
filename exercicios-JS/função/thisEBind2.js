function Pessoa(){
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
        if (self.idade == 3) {console.log('Idade igual a 10')}
    }/*.bind(this)*/, 1000)
}

new Pessoa