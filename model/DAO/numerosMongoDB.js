import CnxMongoDB from '../DB.js'

class NumerosMongoDAO {

    findNumeros = async ()  => {
        if(!CnxMongoDB.connection) return []
        try {
            let dev = []
            let numeros = await CnxMongoDB.db.collection('numeros').find().project({numero: 1, _id:0}).toArray()
            numeros.forEach(x => {
                dev.push(x.numero)
            });
            return {"numeros": dev}
        }
        catch {
            return []
        }
    }

    saveNumero = async numero => {
        if(!CnxMongoDB.connection) return {}

        await CnxMongoDB.db.collection('numeros').insertOne(numero)
        return numero    
    }

    calcularPromedio = async () => {
        if (!CnxMongoDB.connection) return []
        try {
            let numeros = await CnxMongoDB.db.collection('numeros').find({}).toArray()
            let total = 0
            numeros.forEach(x => {
               total += x.numero
            });
            let cant = numeros.length
            return { "promedio": total / cant}
        } catch {
            return []
        }

    }

    calcularMinMax = async () => {
        if (!CnxMongoDB.connection) return []
        try {
            let min = await CnxMongoDB.db.collection('numeros').find().sort({numero: 1}).limit(1).project({numero: 1, _id:0}).toArray()
            let max = await CnxMongoDB.db.collection('numeros').find().sort({numero: -1}).limit(1).project({numero: 1, _id:0}).toArray()

            return { "min": min[0].numero, "max": max[0].numero}
        }
        catch {
            return []
        }
    }


    calcularCantidad = async () => {
        if (!CnxMongoDB.connection) return []
        try {
            let dev = await CnxMongoDB.db.collection('numeros').count()
            return { "cantidad": dev}
        }
        catch {
            return []
        }
    }

}

export default NumerosMongoDAO
