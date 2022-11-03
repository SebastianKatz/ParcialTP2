import NumerosMemDAO from './numerosMem.js'
import NumerosMongoDAO from './numerosMongoDB.js'

class NumerosFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MEM' :
                console.log(' ***** Persistiendo en Memoria ***** ')
                return new NumerosMemDAO()

            case 'MONGO' :
                console.log(' ***** Persistiendo en MongoDB ***** ')
                return new NumerosMongoDAO()

            default: 
                console.log(' ***** Persistiendo en default (Memoria) ***** ')
                return new NumerosMemDAO()
        }
    }
}

export default NumerosFactoryDAO