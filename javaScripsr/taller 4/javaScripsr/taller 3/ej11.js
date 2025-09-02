const prompt = require('prompt-sync')();

function buscarCapital() {
   
    const paises = new Map([
        ['Colombia', 'Bogotá'],
        ['Argentina', 'Buenos Aires'],
        ['México', 'Ciudad de México'],
        ['España', 'Madrid'],
        ['Perú', 'Lima'],
        ['Chile', 'Santiago'],
        ['Venezuela', 'Caracas'],
        ['Ecuador', 'Quito'],
        ['Brasil', 'Brasilia'],
        ['Estados Unidos', 'Washington D.C.']
    ]);
    
    
    const pais = prompt("Ingrese un país: ").trim();
    
    const capital = paises.get(pais) || 'No encontrado';
    
  
    console.log(`\nLa capital de ${pais} es: ${capital}`);
    return capital;
}

buscarCapital();