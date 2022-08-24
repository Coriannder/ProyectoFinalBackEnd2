//import ProductosDaoMongoDb from "./productos/ProductosDaoMongoDb"

/* import CarritoDaoMongoDb from './carritos/CarritosDaoMongoDb.js'
import ProductosDaoMongoDb from './productos/ProductosDaoMongoDb.js' */

let productosDao
let carritosDao = ''

switch (/* process.env.PERS */'mongoDb') {

    case 'mongoDb':
        const {default: ProductosDaoMongoDb} = await import ('./productos/ProductosDaoMongoDb.js')
        productosDao = new ProductosDaoMongoDb()
        console.log(productosDao)

        const { default: CarritoDaoMongoDb } = await import ('./carritos/CarritosDaoMongoDb.js')
        carritosDao = new CarritoDaoMongoDb()
}

export {productosDao, carritosDao}

