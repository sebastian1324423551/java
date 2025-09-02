const prompt = require('prompt-sync')();
const numero = parseInt(prompt("Ingrese un numero del 1 al 7: "))

let nombreDia

switch(numero){
    case 1:
        nombreDia = ("Lunes")
        break;
    case 2:
        nombreDia = ("Martes")
        break;
    case 3:
        nombreDia = ("Miercoles")
        break;
    case 4:
        nombreDia = ("Jueves")
        break;
    case 5:
        nombreDia = ("Viernes")
        break;
    case 6:
        nombreDia = ("Sabado")
        break;
    case 7:
        nombreDia = ("Domingo")
        break;
    default:
        nombreDia = null
}

if (nombreDia){
    console.log(nombreDia)
} else{
    console.log("numero fuera de rango")
}