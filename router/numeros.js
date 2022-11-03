import express from 'express'
import ControladorNumeros from '../controller/numeros.js'


export class RouterNumeros {
    constructor() {
        this.router = express.Router()
        this.controladorNumeros = new ControladorNumeros()
    }

    start() {
        this.router.post('/', this.controladorNumeros.postNumero)
        this.router.get('/entrada', this.controladorNumeros.getNumeros)
        this.router.get('/promedio', this.controladorNumeros.getPromedio)
        this.router.get('/minmax', this.controladorNumeros.getMinMax)
        this.router.get('/cantidad', this.controladorNumeros.getCantidad)

        return this.router
    }
}