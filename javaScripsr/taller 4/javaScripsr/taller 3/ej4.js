const prompt = require('prompt-sync')();

function calcularSumaYPromedio() {
   
    const numeroCompleto = prompt("Ingrese el número: ");
    
    
    const digitos = [...numeroCompleto].map(digito => parseInt(digito)); //...numeroCompleto separa el string en caracteres indivuduales como en el split, .map convierte el string a numero con parseint
    
   
    const suma = digitos.reduce((total, num) => total + num, 0); // reduce suma 0 + 1 y asi sucesivamente 
    const promedio = suma / digitos.length;
    
    
    console.log(`Suma de dígitos: ${suma}`);
    console.log(`Promedio de dígitos: ${promedio.toFixed(2)}`);
    
    return { suma, promedio };
}


calcularSumaYPromedio();