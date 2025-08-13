const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un número entero: "));
let suma = 0;

while (numero > 0) {
    suma += numero % 10; // Extrae el último dígito
    numero = Math.floor(numero / 10); // Elimina el último dígito
}

console.log("La suma de los dígitos es:", suma);