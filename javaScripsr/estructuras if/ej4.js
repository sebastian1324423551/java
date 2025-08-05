//switch
const prompt = require('prompt-sync')();
const mes = parseInt(prompt("Ingrese el numero del 1 al 12: "))

let nombremes

switch(mes){
    case 1:
        nombremes = "Enero"
        break;
    case 2:
        nombremes = "Febrero"
        break;
    case 3:
        nombremes = "Marzo"
        break;
    case 4:
        nombremes = "Abril"
        break;
    case 5:
        nombremes = "Mayo"
        break;
    case 6:
        nombremes = "Junio"
        break;
    case 7:
        nombremes = "Julio"
        break;
    case 8:
        nombremes = "Agosto"
        break;
    case 9:
        nombremes = "Septiembre"
        break;
    case 10:
        nombremes = "Octubre"
        break;
    case 11:
        nombremes = "Noviembre"
        break;
    case 12:
        nombremes = "Diciembre"
        break;

    default:
        nombremes = "Error. Solo numeros del 1 al 12"
    break
}

console.log(nombremes);