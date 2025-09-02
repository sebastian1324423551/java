const prompt = require('prompt-sync')();

const numero = parseInt(prompt("Ingrese un número entero: "));
let esPrimo = true;

if (numero <= 1) {
    esPrimo = false;
} else {
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
}

console.log(`${numero} ${esPrimo ? 'es' : 'no es'} un número primo.`);