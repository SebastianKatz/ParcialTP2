import config from '../config.js'
import NumerosFactoryDAO from '../model/DAO/numerosFactory.js'


class ApiNumeros {
    constructor() {
        this.numerosModel = NumerosFactoryDAO.get(config.MODO_PERSISTENCIA)
    }

    obtenerNumeros = async id => {
        return await this.numerosModel.findNumeros()
    }

    obtenerPromedio = async id => {
        return await this.numerosModel.calcularPromedio()
    }

    obtenerMinMax = async id => {
        return await this.numerosModel.calcularMinMax()
    }

    obtenerCantidad = async id => {
        return await this.numerosModel.calcularCantidad()
    }

    guardarNumero = async numero => {
        return await this.numerosModel.saveNumero(numero)
    }
}

export default ApiNumeros