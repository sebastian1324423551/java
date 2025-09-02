import { areaCirculo,areatriangulo } from "./funciones.js";


document.querySelector("#btnCalcular").addEventListener("click", calcularArea)
function calcularArea(){
    const radio = document.querySelector("#txtRadio").value
    const area = areaCirculo(radio)
    console.log(area)
    document.querySelector("#txtResultado").value = area.toFixed(2)
}