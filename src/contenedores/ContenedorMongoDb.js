import mongoose from 'mongoose'
import config from '../utils/config'
import transformMongoArray from '../utils/objectUtils'

await  mongoose.connect(config.mongo.URL, config.mongo.options)
.then(() => console.log('Base de datos conectada'))


class ContenedorMongoDb {
    constructor (nombreCollection, squema) {
        this.collection = mongoose.model(nombreCollection, squema)
    }

    async listar(id) {
        try {
            const docs =this.collection.find({_id: id} , {__v: 0})
            if (docs.length == 0){
                throw new Error(`Error id: ${id} no encontrado`)
            } else {
                const result = transformMongoArray(docs)[0]
                return docs[0]
            }
        } catch (error) {
            throw new Error(`Error al listar por id: ${error}`)
        }
    }

    async listarAll() {
        try {
            const docs =this.collection.find({} , {__v: 0}).lean()
            if (docs.length == 0){
                throw new Error(`Error id: ${id} no encontrado`)
            } else {
                return transformMongoArray(docs)
            }
        } catch (error) {
            throw new Error(`Error al listar por id: ${error}`)
        }
    }

    async guardar(elemento) {
        try {
            const doc = await this.collection.create(elemento)
            return doc
        } catch (error) {
            throw new Error(`Error al guardar objeto: ${error}`)
        }
    }

    async actualizar(id, elemento) {
        try {
            const doc =this.collection.update({_id: id} , {$set: {...elemento}})
            return doc
        }catch (error) {
            throw new Error(`Error al listar por id: ${error}`)
        }
    }

    async borrar(id, objeto) {
        try {
            const doc = this.collection.update({_id: id} , {$set: {...objeto}})
            return doc
        }catch (error) {
            throw new Error(`Error al listar por id: ${error}`)
        }
    }
}


export default ContenedorMongoDb
