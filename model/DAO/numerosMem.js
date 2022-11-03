class NumerosMemDAO {

    constructor() {
        this.numeros = [
            { id: '1', numero: 5},
            { id: '2', numero: 7},
        ]
    }

    findNumeros = async ()  => {
        try {
            let dev = []
            this.numeros.forEach(x => {
                dev.push(x.numero)
            });
            return {"numeros": dev}
        }
        catch {
            return []
        }
    }

    calcularPromedio = async () => {
        try {
            let sumTotal = 0
            this.numeros.forEach(x => {
                sumTotal += x.numero
            });
            
            return {"promedio": sumTotal / this.numeros.length}
        }
        catch {
            return []
        }
    }

    calcularMinMax = async () => {
        try {
            
        }
        catch {
            return []
        }
    }

    calcularCantidad = async () => {
        try {
            return {"cantidad": this.numeros.length} 
        }
        catch {
            return []
        }
    }

    saveNumero = async numero => {
        const id = parseInt(this.numeros[this.numeros.length-1].id) + 1
        numero.id = String(id)

        this.numeros.push(numero)

        return numero    
    }
}

export default NumerosMemDAO
