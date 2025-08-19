const prompt = require('prompt-sync')();

function contarPalabras() {
    const texto = prompt("Ingrese un texto: ");
    const palabras = texto.split(' ').filter(Boolean); // boolean descarta strings vacios que genera el split, valores null y undefined
    
    console.log(`Número de palabras: ${palabras.length}`);
    return palabras.length;
}

contarPalabras();