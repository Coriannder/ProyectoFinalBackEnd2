const isAdmin = true

const onlyAdmins = (req, res, next)=>{
    isAdmin
    ?
    next()
    :
    res.send({ error : -1, descripcion: `ruta ${req.url} con método ${req.method} no autorizada` })
}


export default  onlyAdmins