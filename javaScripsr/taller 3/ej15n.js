const prompt = require('prompt-sync')();
let cuentas = []
const crearCuenta =()=>{
    const fechaHoy = new Date()
    const consetivoCuenta = cuentas.length + 1
    const codigoCuenta = `${fechaHoy.getfullyear()}-${consetivoCuenta}`
    const saldo=parseInt(prompt("Ingrese saldo inicial de la cuenta  a crear: "))
    const cuenta = {
        codigo: codigoCuenta,
        fechaCreacion: fechaHoy.toLocaleDateString(),
        saldo: saldo
    }
    cuentas.push(cuenta)
    console.log("cuenta creada con exito")
    console.log(cuenta)
}

const consignar=()=>{
    console.clear()
    console.log("PROCESO CONSIGNAR")
    const codigoCuentaConsignar=prompt("INgrese codigo de cuenta a consignar: ")
    let cuentaAconsignar=cuentas.filter(cuenta=>cuenta.codigo===codigoCuentaConsignar)
    
}
const menu() =>{
    let opcion=0
    do{
        console.clear
        console.log("Menu Banco NU")
        console.log("1.Crear una cuenta")
        console.log("2. Consignar cuenta")
        console.log("3. Retirar cuenta")
        console.log("4. Consultar cuenta por codigo")
        console.log("5. Listar cuentas")
        console.log("6. salir")
        opcion = parseInt(prompt("Ingrese opcion: "))
        switch(Option){
            case "1": crearCuenta()
            break
            case "2": consignarCuenta()
            case "3": retirarCuenta()
            case "4": consultarCuenta(); break;
            case "5": console.log(cuentas)
            case "6": console.log("Saliendo..."); break;
            default: console.log("Opción inválida.");
        }

    }while(opcion!=7)
}

