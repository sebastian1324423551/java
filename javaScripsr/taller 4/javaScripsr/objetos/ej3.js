//objetos con funciones

let carro = {
    placa: "xx123",
    marca: "mazda",
    color: "rojo",
    encender: function(){
        return `El carro de placa ${this.placa} se ha enecendido`
    }

}
console.log(carro.encender())

let cuenta = {
    titular: "Ana",
    saldo: 1500,     
    mostrarSaldo: function(){
        return `El saldo de ${this.titular} es ${this.saldo}`
    }

}
console.log(cuenta.mostrarSaldo())
cuenta.saldo -=1000
console.log(cuenta.mostrarSaldo())