const prompt = require('prompt-sync')();


const num1 = parseInt(prompt("Ingrese el primer número: "));
const num2 = parseInt(prompt("Ingrese el segundo número: "));

const inicio = Math.min(num1, num2);
const fin = Math.max(num1, num2);

console.log(`Múltiplos de 3 entre ${inicio} y ${fin}:`);

for (let i = inicio; i <= fin; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}