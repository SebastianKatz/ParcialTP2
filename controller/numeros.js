import ApiNumeros from '../api/numeros.js'


class ControladorNumeros {

    constructor() {
        this.apiNumeros = new ApiNumeros()
    }

    getNumeros = async (req,res) => {
        res.json( await this.apiNumeros.obtenerNumeros() )
    }

    getPromedio = async (req,res) => {
        res.json( await this.apiNumeros.obtenerPromedio() )
    }

    getMinMax = async (req,res) => {
        res.json( await this.apiNumeros.obtenerMinMax() )
    }

    getCantidad = async (req,res) => {
        res.json( await this.apiNumeros.obtenerCantidad() )
    }

    postNumero = async (req,res) => {
        const numero = req.body
        res.json(await this.apiNumeros.guardarNumero(numero))
    }
}

export default ControladorNumeros