const prompt = require('prompt-sync')();

function convertirMayusculas() {
    
    const input = prompt("Ingrese nombre: ");
    
  
    const nombres = input.split(/[, ]+/).map(nombre => nombre.trim()).filter(Boolean);
    
   
    const mayusculas = nombres.map(n => n.toUpperCase());
    
   
    console.log("Nombres originales:", nombres);
    console.log("Nombres en mayúsculas:", mayusculas);
    
    return mayusculas;
}

convertirMayusculas();