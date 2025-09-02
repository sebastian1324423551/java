const prompt = require('prompt-sync')();
const edad = parseInt(prompt("ingrese su edad: "))


if(edad < 5){
    console.log("Puede entrar gratis")
}else if(edad >=5 && edad <= 18){
    console.log("Debe pagar 5mil pesos por su entrada")  
}else{
    console.log("Debe pagar 10mil pesos por su entrada")
}