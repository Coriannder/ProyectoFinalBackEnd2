import mongoose from 'mongoose'
import config from '../utils/config'
import {renombrarCampo} from '../utils/objectUtils'

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
                const result = renombrarCampo(docs[0])
                return docs[0]
            }
        } catch (error) {
            throw new Error(`Error al listar por id: ${error}`)
        }
    }

    async listarAll() {
        try {
            const docs =this.collection.find({} , {__v: 0})
            if (docs.length == 0){
                throw new Error(`Error id: ${id} no encontrado`)
            } else {
                return docs
            }
        } catch (error) {
            throw new Error(`Error al listar por id: ${error}`)
        }
    }

}







await model.usuarios.deleteMany({})

    const listaUsuarios = [
        { nombre: 'Pedro', apellido: 'Mei', edad: 21, dni: '31155898', curso: '1A', nota: 7 },
        { nombre: 'Ana', apellido: 'Gonzalez', edad: 32, dni: '27651878', curso: '1A', nota: 8 },
        { nombre: 'José', apellido: 'Picos', edad: 29, dni: '34554398', curso: '2A', nota: 6 },
        { nombre: 'Lucas', apellido: 'Blanco', edad: 22, dni: '30355874', curso: '3A', nota: 10 },
        { nombre: 'María', apellido: 'García', edad: 36, dni: '29575148', curso: '1A', nota: 9 },
        { nombre: 'Federico', apellido: 'Perez', edad: 41, dni: '320118321', curso: '2A', nota: 5 },
        { nombre: 'Tomas', apellido: 'Sierra', edad: 19, dni: '38654790', curso: '2B', nota: 4 },
        { nombre: 'Carlos', apellido: 'Fernández', edad: 33, dni: '26935670', curso: '3B', nota: 2 },
        { nombre: 'Fabio', apellido: 'Pieres', edad: 39, dni: '4315388', curso: '1B', nota: 9 },
        { nombre: 'Daniel', apellido: 'Gallo', edad: 25, dni: '37923460', curso: '3B', nota: 2 }
    ]


    for (let usuario of listaUsuarios){
    await new model.usuarios(usuario).save()
    }

    console.log('Usuarios insertados')

    console.log('-----------------------------')


    /* // Ordenados de A-Z
    console.log('Usuarios ordenados  a-z')
    console.log(await model.usuarios.find({},{nombre: 1, _id: 0, apellido: 1}).sort({nombre: 1, })) */


    // Estuduante mas joven
    console.log('El estudiante mas joven es:')
    const edadMasJoven = (await model.usuarios.find({},{edad:1, _id: 0}).sort({ edad: 1 }))[0].edad
     console.log(await model.usuarios.find({edad: edadMasJoven},{nombre:1, apellido:1, edad:1}))









    }
    catch{error => console.log(error)}}

    CRUD()
