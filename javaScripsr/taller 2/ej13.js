const prompt = require('prompt-sync')();

const decimal = parseInt(prompt("Ingrese un número decimal: "));

if (isNaN(decimal)) {
    console.log("Por favor ingrese un número válido");
} else {
    let binario = "";
    let numero = decimal;
    
    if (numero === 0) {
        binario = "0";
    } else {
        while (numero > 0) {
            binario = (numero % 2) + binario;
            numero = Math.floor(numero / 2);
        }
    }
    
    console.log(`El número ${decimal} en binario es: ${binario}`);
}