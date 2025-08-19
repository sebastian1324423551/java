const prompt = require('prompt-sync')();

function reemplazarElemento() {
   
    const input = prompt("Ingrese elementos: ");
    
    
    let arreglo = input.split(/[, ]+/).map(item => item.trim()).filter(item => item !== '');
    
  
    const viejo = prompt("Elemento a reemplazar: ").trim();
    const nuevo = prompt("Nuevo elemento: ").trim();
    
   
    arreglo = arreglo.map(item => item === viejo ? nuevo : item);
    
    
    console.log("\nArreglo modificado:", arreglo);
    return arreglo;
}

reemplazarElemento();