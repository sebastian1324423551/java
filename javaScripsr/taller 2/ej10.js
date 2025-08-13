const prompt = require('prompt-sync')();

const numero = parseInt(prompt("Ingrese un número entre 1 y 20: "));
const frase = prompt("Ingrese una frase: ");

if (numero >= 1 && numero <= 20) {
    for (let i = 0; i < numero; i++) {
        console.log(frase);
    }
} else {
    console.log("El número debe estar entre 1 y 20");
}