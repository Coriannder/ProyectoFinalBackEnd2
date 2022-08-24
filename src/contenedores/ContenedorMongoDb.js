import mongoose from 'mongoose'
import config from '../utils/config.js'
import transformMongoObject from '../utils/objectUtils.js'
import transformMongoArray from '../utils/objectUtils.js'

await  mongoose.connect(config.mongo.URL, config.mongo.options)
.then(() => console.log('Base de datos conectada'))
.catch(err => console.log("no se conecto"))


class ContenedorMongoDb {
    constructor (nombreCollection, squema) {
        this.collection = mongoose.model(nombreCollection, squema)
    }

    async listar(id) {
        try {
            const res = await this.collection.find({_id: id})
            return transformMongoObject(res)
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async listarAll() {
        try {
            const res = await this.collection.find({})
            return transformMongoObject(res)
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async guardar(elemento) {
        try {
            const res = await this.collection.create(elemento)
            return transformMongoObject(res)
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async actualizar(id, elemento) {
        try {
            const res = await this.collection.updateOne({_id: id} , {$set: {...elemento}})
            return res.acknowledged
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async borrar(id) {
        try {
            const res = await   this.collection.deleteOne({_id: id})
            return res.acknowledged
        } catch (error) {
            console.log(error)
            return false
        }
    }
}

export default ContenedorMongoDb
