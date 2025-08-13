const prompt = require('prompt-sync')();
//funcion tipo flecha//
const areaRectangulo = (base,altura)=>{
    return base * altura
}
let base = prompt("ingrese base del rectangulo: ")
let altura = prompt("ingrese altura del rectangulo: ")

let area = areaRectangulo(base,altura)

console.log(`El area del rectangulo es: ${area}`)

