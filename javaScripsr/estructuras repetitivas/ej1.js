//mostrar en pantalla los multiplos de 3 entre dos numeros ingresados por teclado//
const prompt = require('prompt-sync')();

const numero1 = prompt("Ingrese numero entero inferior: ")
const numero2 = prompt("Ingrese numero entero superior: ")
let mayor = 0
let menor = 0

if (numero1>numero2){
    mayor=numero1
    menor=numero2
}else{
    mayor=numero2
    menor=numero1
}

for(let valor=menor;valor<=mayor;valor++){
    if(valor%3==0){
        console.log(valor)
    }
}