import Alcancia from "./alcancia";

let miAlcancia = null

const crearAlancia = ()=>{
    const miAlcancia = new Alcancia()
}
const actualizarDatosInterfaz =()=>{
    document.querySelector("txtMonedas200").value=miAlcancia.moneda200
    document.querySelector("txtMonedas500").value=miAlcancia.moneda500
    document.querySelector("txtMonedas1000").value=miAlcancia.moneda1000
    document.querySelector("txtTotalAlcancia").value=miAlcancia.calcularTotalAhorrado()
}   
document.querySelector("img200").addEventListener("click",()=>{
    miAlcancia.agregarMoneda200()
    actualizarDatosInterfaz()
})

document.querySelector("img500").addEventListener("click",()=>{
    miAlcancia.agregarMoneda500()
    actualizarDatosInterfaz()
})

document.querySelector("img1000").addEventListener("click",()=>{
    miAlcancia.agregarMoneda1000()
    actualizarDatosInterfaz()
})

document.querySelector("btnRomper").addEventListener("click",()=>{
    let romper = confirm("¿Está seguro de romper la alcancía?")
    if(romper){
        alert("La alcancia quedara vacia")
        inicializarAlcancia()
    }
})

const inicializarAlcancia=()=>{
    crearAlancia()
    actualizarDatosInterfaz

}
inicializarAlcancia()
