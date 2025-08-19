const prompt = require('prompt-sync')();

function eliminarDuplicados() {
    const input = prompt("Ingrese elementos : ");
    
    const elementos = input.split(/[, ]+/).map(item => item.trim()).filter(Boolean); //trin elimina espacios en blanco al inicio y final de cada string
    
    const unicos = [...new Set(elementos)]; //new Set() crea un objeto Set que automáticamente elimina duplicados (los Sets solo almacenan valores únicos)

    // [... ] (operador spread) convierte el Set de vuelta a un arreglo
    
    console.log("Elementos únicos:", unicos);
    return unicos;
}

eliminarDuplicados();