import { Router } from 'express';
import { carritosDao } from '../daos/index.js';





carritosDao.guardar(    // cargo un carrito de prueba
    [
        {id: 1, nombre: 'lapicera', descripcion: 'lapicera azul', codigo: 'lap01234', foto: 'http//kjdhlksugdli', precio: 500, stock: 10 },
        {id: 2, nombre: 'regla', descripcion: 'regla transparente', codigo: 'lap01235', foto: 'http//kugytoulksugdli', precio: 650, stock: 10 }
    ])

routerCarrito.post('/', async (req,res)=>{                   // Genera carrito y devuelve su id
    res.json( await carritosDao.guardar() )             // Guarda un item (en este caso un carrito vacio) y entrega su id
})

routerCarrito.delete('/:id', async (req,res)=>{       // Elimina un carrito por su id
   res.send( await carritosDao.borrar(req.params.id))
})

routerCarrito.get('/:id/productos', async (req,res)=>{  // Muestra Los productos de un carrito encontrado por su id
    const carrito = carritosDao.listar(req.params.id)
    if(carrito){
        res.json(carrito)
    }else{res.send('Carrito no encontrado')}
  
})

routerCarrito.post('/:id/productos', async (req,res)=>{     // Incorpora un producto a un carrito
    let carrito = carritosDao.getById(Number(req.params.id))
    if(carrito){
        const indice = carrito.item.findIndex(elem => elem.id === Number(req.body.id))
        if(indice !== -1){
        carrito.item[indice] = req.body
        }else{
        carrito.item.push(req.body)
        }
        carritosDao.updateItem(Number(req.params.id), carrito.item)
        res.json(carrito.item)
    }else res.send('Carrito no encontrado')
})

routerCarrito.delete('/:id/productos/:id_prod', async (req,res)=>{    //Elimina un producto del carrito por su id de carrito y de producto
    let carrito = carritosDao.getById(Number(req.params.id))
    if(carrito){
        const index = carrito.item.findIndex(elem => elem.id === Number(req.params.id_prod))
        if(index !== -1){
            carrito.item.splice(index, 1)
            carritosDao.updateItem(Number(req.params.id), carrito.item)
            res.send('Producto Eliminado')
        }else{
            res.send('Producto no encontrado')
        }
    }else{res.send('Carrito no encontrado')}
})

export default  routerCarrito