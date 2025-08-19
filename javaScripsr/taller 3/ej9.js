const prompt = require('prompt-sync')();

function buscarIndice() {
   
    const input = prompt("Ingrese elementos: ");
    
    
    const arreglo = input.split(/[, ]+/).map(item => item.trim()).filter(Boolean);
    
 
    const valor = prompt("Ingrese valor a buscar: ").trim();
    
   
    const indice = arreglo.indexOf(valor);
    
   
    if (indice !== -1) {
        console.log(`El elemento "${valor}" está en el índice: ${indice}`);
    } else {
        console.log(`"${valor}" no existe en el arreglo`);
    }
    
    return indice;
}

buscarIndice();