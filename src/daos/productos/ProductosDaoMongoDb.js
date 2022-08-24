import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js";


class ProductosDaoMongoDb extends ContenedorMongoDb{
    constructor(){
        super('Productos', {
            title: {type: String, required: true},
            price: {type: Number, required: true},
            thumbnail: {type: String, required: true}
        })
    }
}

export default ProductosDaoMongoDb