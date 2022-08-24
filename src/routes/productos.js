import { Router } from 'express';
import { productosDao } from '../daos/index.js';



//Guardo 1 productos de prueba
let hola = await productosDao.guardar({title: 'lapicera', price: 500, thumbnail: 'http//kugytoulksugdli' })

//let list = await productosDao.borrar('68c09')

console.log(hola)
//console.log(list)

import onlyAdmins from '../midlewares/onlyAdmins.js'

const routerProductos = new Router()

routerProductos.get('/:id?',async (req,res)=>{   // Si hay parametro obtiene producto por id, si no hay obtiene todos los productos
    const id = req.params.id
    if(id){
        const productos = await productosDao.listar(id)
        res.json( productos )
    }else{
        const productos = await productosDao.listarAll()
        res.json( productos )
   }
})

routerProductos.post('/' ,async (req,res)=>{         // Agrega un producto
    res.json(await productosDao.guardar(req.body))
})

routerProductos.put('/:id', onlyAdmins ,async (req, res) =>{        // Actualiza un producto por su id
    res.json(await productosDao.actualizar(req.params.id, req.body))
})

routerProductos.delete('/:id', onlyAdmins ,async (req,res)=>{       // Elimina un producto por su id
    res.json(await productosDao.borrar(req.params.id))
})

export default routerProductos



