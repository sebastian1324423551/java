const prompt = require('prompt-sync')();

const num1 = parseInt(prompt("Ingrese el primer número entero: "));
const num2 = parseInt(prompt("Ingrese el segundo número entero: "));

const inicio = Math.min(num1, num2);
const fin = Math.max(num1, num2);

let sumaPares = 0;
let sumaImpares = 0;
let contadorImpares = 0;

for (let i = inicio; i <= fin; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    } else {
        sumaImpares += i;
        contadorImpares++;
    }
}

const promedioImpares = contadorImpares > 0 ? sumaImpares / contadorImpares : 0;

console.log(`\nResultados entre ${inicio} y ${fin}:`);
console.log(`Suma de números pares: ${sumaPares}`);
console.log(`Promedio de números impares: ${promedioImpares.toFixed(2)}`);