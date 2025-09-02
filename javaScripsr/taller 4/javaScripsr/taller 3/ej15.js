
let cuentas = [];

const fechaActual = new Date();
const añoActual = fechaActual.getFullYear();

function crearCuenta() {
    const codigo = `aho-${añoActual}-${cuentas.length + 1}`;
    const saldoInicial = parseFloat(prompt("Ingrese el saldo inicial:"));
    if (isNaN(saldoInicial) || saldoInicial < 0) {
        console.log("Saldo inválido. Debe ser un número positivo.");
        return;
    }
    const cuenta = {
        codigo: codigo,
        fechaCreacion: fechaActual.toLocaleDateString(),
        saldo: saldoInicial
    };
    cuentas.push(cuenta);
    console.log(`Cuenta creada con código ${codigo} y saldo ${saldoInicial}.`);
}

function consignarCuenta() {
    const codigo = prompt("Ingrese el código de la cuenta:");
    const cuenta = cuentas.find(c => c.codigo === codigo);
    if (cuenta) {
        const valor = parseFloat(prompt("Ingrese el valor a consignar:"));
        if (isNaN(valor) || valor <= 0) {
            console.log("Valor inválido. Debe ser un número positivo.");
            return;
        }
        cuenta.saldo += valor;
        console.log(`Consignación exitosa. Nuevo saldo: ${cuenta.saldo}`);
    } else {
        console.log("Cuenta no encontrada.");
    }
}


function retirarCuenta() {
    const codigo = prompt("Ingrese el código de la cuenta:");
    const cuenta = cuentas.find(c => c.codigo === codigo);
    if (cuenta) {
        const valor = parseFloat(prompt("Ingrese el valor a retirar:"));
        if (isNaN(valor) || valor <= 0) {
            console.log("Valor inválido. Debe ser un número positivo.");
            return;
        }
        if (valor > cuenta.saldo) {
            console.log("Saldo insuficiente.");
            return;
        }
        cuenta.saldo -= valor;
        console.log(`Retiro exitoso. Nuevo saldo: ${cuenta.saldo}`);
    } else {
        console.log("Cuenta no encontrada.");
    }
}


function consultarCuenta() {
    const codigo = prompt("Ingrese el código de la cuenta:");
    const cuenta = cuentas.find(c => c.codigo === codigo);
    if (cuenta) {
        console.log(`Código: ${cuenta.codigo}`);
        console.log(`Fecha de creación: ${cuenta.fechaCreacion}`);
        console.log(`Saldo: ${cuenta.saldo}`);
    } else {
        console.log("Cuenta no encontrada.");
    }
}

function listarCuentas() {
    if (cuentas.length === 0) {
        console.log("No hay cuentas registradas.");
        return;
    }
    cuentas.forEach(cuenta => {
        console.log(`Código: ${cuenta.codigo}, Saldo: ${cuenta.saldo}, Fecha: ${cuenta.fechaCreacion}`);
    });
}


function mostrarMenu() {
    let opcion;
    do {
        console.log("\nMENÚ BANCO ADSO");
        console.log("1. Crear Cuenta");
        console.log("2. Consignar Cuenta");
        console.log("3. Retirar Cuenta");
        console.log("4. Consultar Cuenta Por Código");
        console.log("6. Listar Cuentas");
        console.log("7. Salir");
        opcion = prompt("Ingrese Opción (1-7):");

        switch (opcion) {
            case "1": crearCuenta(); break;
            case "2": consignarCuenta(); break;
            case "3": retirarCuenta(); break;
            case "4": consultarCuenta(); break;
            case "6": listarCuentas(); break;
            case "7": console.log("Saliendo..."); break;
            default: console.log("Opción inválida.");
        }
    } while (opcion !== "7");
}


mostrarMenu();