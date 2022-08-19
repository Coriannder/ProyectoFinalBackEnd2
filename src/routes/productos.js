const Router = require('express');
const routerProductos = Router();

import ProductosDaoMongoDb from '../daos/productos/ProductosDaoMongoDb'

//Cargo 2 productos de prueba
ProductosDaoMongoDb.guardar({title: 'lapicera', price: 500, thumbnail: 'http//kugytoulksugdli' })
ProductosDaoMongoDb.guardar({title: 'lapiz', price: 480, thumbnail: 'http//kugytouloihlidli' })

import onlyAdmins from '../midlewares/onlyAdmins'


routerProductos.get('/:id?',(req,res)=>{   // Si hay parametro obtiene producto por id, si no hay obtiene todos los productos
    const id = req.params.id
    if(id){
        res.json(ProductosDaoMongoDb.listar(id))
    }else{
        res.json(ProductosDaoMongoDb.listarAll())
    }
})

routerProductos.post('/', onlyAdmins ,(req,res)=>{         // Agrega un producto
    ProductosDaoMongoDb.guardar(req.body)
    res.send('Producto guardado')
})

routerProductos.put('/:id', onlyAdmins ,(req, res) =>{        // Actualiza un producto por su id
    const isUpdate = contenedorProductos.updateItem(Number(req.params.id), req.body)
    if(isUpdate){
        res.json('Producto Actualizado')
    }else{
        res.json("Producto no encontrado")
    }
})

routerProductos.delete('/:id', onlyAdmins ,(req,res)=>{       // Elimina un producto por su id
    const isDelete = contenedorProductos.deleteItem(Number(req.params.id))
    if(isDelete){
        res.json('Producto borrado')
    }else{
        res.send('Producto no encontrado')
    }

})

module.exports = {routerProductos}

