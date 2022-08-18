
const renombrarCampo = (objeto, campo, nuevoCampo) => {
    objeto.map(ob => {
        ob.nuevoCampo = ob.campo
    })
    delete objeto.campo
    return objeto
}


export default   renombrarCampo