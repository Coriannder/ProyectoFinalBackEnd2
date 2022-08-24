import express from 'express';
import routerProductos from './src/routes/productos.js';
//import routerCarrito from './src/routes/carritos.js';

const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(express.json())


app.use('/api/productos', routerProductos)

//app.use('/api/carrito', routerCarrito)


app.use((req, res) => {
    res.status(404).send({ error : -2, descripcion: `ruta ${req.url} con método ${req.method} no implementada`});
})


const PORT = 8081

const server = app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Servidor escuchando en puerto ${server.address().port}`)
})
