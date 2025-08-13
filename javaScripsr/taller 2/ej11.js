const prompt = require('prompt-sync')();

const numero = parseInt(prompt("Ingrese un número para calcular su factorial: "));
let factorial = 1;

if (numero < 0) {
    console.log("No existe factorial de números negativos");
} else {
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    console.log(`${numero}! = ${factorial}`);
}