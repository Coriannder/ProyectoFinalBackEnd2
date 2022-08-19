import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb";

class CarritoDaoMongoDb extends ContenedorMongoDb {
    constructor () {
        super('carritos', {
            productos: {type: [], required: true}
        })
    }
}

export default CarritoDaoMongoDb