class Persona {
    
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

    saludar(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
    }
}
const persona1 = new Persona(' Juan', 25)
persona1.saludar();

class Rectangulo {
    constructor(base, altura){
        this.base = base
        this.altura = altura
    }

    calcularArea(){
        return this.base * this.altura
    }
}

const base = 4.5
const altura = 3.8
const rectangulo = new Rectangulo(base, altura)
const areaRectangulo = rectangulo.calcularArea()
console.log(`El área del rectángulo es: ${areaRectangulo}`)

class Circulo {
    constructor(radio){
        this.radio = radio
    }
    calcularArea(){
        return Math.PI * this.radio * this.radio

    }

}
const radio = 5.2
const circulo = new Circulo(radio)
const areaCirculo = circulo.calcularArea()
console.log(`El area del circulo es: ${areaCirculo.toFixed(2)}`)

class Estudiante {
    constructor(nombre) {
        this.nombre = nombre;
        this.materias = [];
    }

    // Método para agregar materias
    agregarMateria(materia) {
        this.materias.push(materia);
    }

    // Método para listar todas las materias
    listarMaterias() {
        console.log(`Materias de ${this.nombre}:`);
        if (this.materias.length === 0) {
            console.log("No tiene materias registradas");
        } else {
            this.materias.forEach((materia, index) => {
                console.log(`${index + 1}. ${materia}`);
            });
        }
        return this.materias; // Retorna el array de materias
    }

    // Método para eliminar una materia
    eliminarMateria(materia) {
        const index = this.materias.indexOf(materia);
        if (index > -1) {
            this.materias.splice(index, 1);
            console.log(`Materia "${materia}" eliminada`);
        } else {
            console.log(`La materia "${materia}" no existe`);
        }
    }

    // Método para obtener el número total de materias
    obtenerTotalMaterias() {
        return this.materias.length;
    }
}

// Ejemplo de uso:
const estudiante1 = new Estudiante("Juan Pérez");


estudiante1.agregarMateria("Matemáticas");
estudiante1.agregarMateria("Física");
estudiante1.agregarMateria("Programación");


estudiante1.listarMaterias();


class CuentaBancaria {
    /**
     * Definición de la propiedad saldo como privada
     */
    #saldo;
    
    /**
     * @param {string} titular
     * @param {int} saldoInicial
     */
    constructor(titular, saldoInicial) {
        this.nombre = titular;
        this.#saldo = saldoInicial;
    }

    /**
     * Método que permite realizar el proceso
     * de depositar un valor a la cuenta
     * @param {*} monto
     */
    depositar(monto) {
        this.#saldo += monto;
    }

    /**
     * Método que retorna el saldo
     * @returns float
     */
    obtenerSaldo() {
        return this.#saldo;
    }
}

const cuenta = new CuentaBancaria("César", 2500000);
console.log(cuenta); // CuentaBancaria { titular: 'César' }

cuenta.depositar(500000);
console.log(cuenta.obtenerSaldo()); // 3000000

console.log(cuenta.titular); // César
console.log(cuenta.saldo); // undefined --> es privado no podemos acceder a él

class Empleado {
    #sueldo;
    
    constructor(sueldoInicial) {
        this.#sueldo = sueldoInicial;
    }
    
    aplicarAumento(porcentaje) {
        this.#sueldo += this.#sueldo * (porcentaje / 100);
    }
    
    get correo() {
        return this._correo;
    }
    
    set correo(nuevoCorreo) {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nuevoCorreo)) {
            this._correo = nuevoCorreo;
        } else {
            console.log("Error: Formato de correo inválido");
        }
    }
}

class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    info() {
        return `${this.marca} ${this.modelo}`;
    }
}

class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    info() {
        return `${this.marca} ${this.modelo}`;
    }
}

class Auto extends Vehiculo {
    constructor(marca, modelo, puertas) {
        super(marca, modelo);
        this.puertas = puertas;
    }

    info() {
        return `${super.info()} con ${this.puertas} puertas`;
    }
}

// Código de prueba
const miAuto = new Auto("Renault", 2020, 4);
console.log(miAuto); // Auto { marca: 'Renault', modelo: 2020, puertas: 4 }
console.log(miAuto.info()); // Renault 2020 con 4 puertas
miAuto.modelo = 2010;
console.log(miAuto); // Auto { marca: 'Renault', modelo: 2010, puertas: 4 }

// Clase base Persona
class Persona {
    constructor(identificacion, nombre, correo) {
        this.identificacion = identificacion;
        this.nombre = nombre;
        this.correo = correo;
    }
}

// Clase hija Aprendiz
class Aprendiz extends Persona {
    constructor(identificacion, nombre, correo, puntajeIcFes) {
        super(identificacion, nombre, correo);
        this.puntajeIcFes = puntajeIcFes;
    }

    info() {
        return `Aprendiz: ${this.nombre} (ID: ${this.identificacion}), Correo: ${this.correo}, Puntaje ICFES: ${this.puntajeIcFes}`;
    }
}

// Clase hija Instructor
class Instructor extends Persona {
    constructor(identificacion, nombre, correo, especialidad) {
        super(identificacion, nombre, correo);
        this.especialidad = especialidad;
    }

    info() {
        return `Instructor: ${this.nombre} (ID: ${this.identificacion}), Correo: ${this.correo}, Especialidad: ${this.especialidad}`;
    }
}

// Clase base Animal
class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    hacerSonido() {
        return "El animal hace un sonido";
    }
}

// Clase hija Perro
class Perro extends Animal {
    constructor(nombre, edad, raza) {
        super(nombre, edad);
        this.raza = raza;
    }

    hacerSonido() {
        return "¡Guau guau!";
    }

    moverCola() {
        return `${this.nombre} está moviendo la cola felizmente`;
    }
}

// Clase hija Gato
class Gato extends Animal {
    constructor(nombre, edad, color) {
        super(nombre, edad);
        this.color = color;
    }

    hacerSonido() {
        return "¡Miau miau!";
    }

    ronronear() {
        return `${this.nombre} está ronroneando suavemente`;
    }
}

// Ejemplo de uso
console.log("=== PERSONAS ===");
const aprendiz1 = new Aprendiz("123", "María", "maria@email.com", 350);
console.log(aprendiz1.info());

const instructor1 = new Instructor("456", "Carlos", "carlos@instituto.edu", "Programación");
console.log(instructor1.info());

console.log("\n=== ANIMALES ===");
const perro1 = new Perro("Max", 3, "Labrador");
console.log(perro1.hacerSonido());
console.log(perro1.moverCola());

const gato1 = new Gato("Luna", 2, "Negro");
console.log(gato1.hacerSonido());
console.log(gato1.ronronear());

class Direccion {
    constructor(calle, ciudad) {
        this.calle = calle;
        this.ciudad = ciudad;
    }
}

class Usuario {
    constructor(nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
    }

    mostrarDireccion() {
        return `${this.direccion.calle}, ${this.direccion.ciudad}`;
    }
}

//código de implementación
//creamos un objeto de tipo Direccion
const dir = new Direccion("Avenida el Bosque", "Popayán");
//se crea un objeto de tipo usuario
const user = new Usuario("Homero", dir);
console.log(user.mostrarDireccion()); //Avenida el Bosque, Popayán

// Sistema de Pedidos
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Pedido {
    constructor() {
        this.productos = [];
    }
    
    agregarProducto(producto) {
        this.productos.push(producto);
    }
}

// Sistema de Biblioteca
class Autor {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Editorial {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Libro {
    constructor(titulo, autor, editorial) {
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
    }
}

// Ejemplo rápido
const pedido = new Pedido();
pedido.agregarProducto(new Producto("Libro", 20));
pedido.agregarProducto(new Producto("Lápiz", 2));

const autor = new Autor("Juan Pérez");
const editorial = new Editorial("Editorial ABC");
const libro = new Libro("Mi Libro", autor, editorial);

console.log(pedido);
console.log(libro);