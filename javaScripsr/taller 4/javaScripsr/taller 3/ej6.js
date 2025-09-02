const prompt = require('prompt-sync')();

function invertirArreglo() {
    const input = prompt("Ingrese los elementos del arreglo: ");
    
    
    const arregloOriginal = input.split(/[, ]+/).filter(Boolean);
    
    const arregloInvertido = [...arregloOriginal].reverse();
    
    console.log('Arreglo original:', arregloOriginal);
    console.log('Arreglo invertido:', arregloInvertido);
}

invertirArreglo();