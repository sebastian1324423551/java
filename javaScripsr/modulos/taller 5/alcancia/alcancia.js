export default class Alcancia {
    /**
     * Constructor de la clase alcancia
     * iniciar vacia
     */
    
    constructor(){
        this.moneda200 = 0
        this.moneda500 = 0
        this.moneda1000 = 0
    }
    agregarMoneda200(){
    this.moneda200++
    }

    agregarMoneda500(){
    this.moneda500++
    }
    agregarMoneda1000(){
    this.moneda1000++
    }
    /**Calcula la cantidad de dinero
     * ahorrado en la alcancia
     * @returns int
     */
    calccularTotalAhorrado(){
        const total = this.moneda200 * 200 +
        this.moneda500 * 500 +
        this.moneda1000 * 1000
        return total
    }
}
