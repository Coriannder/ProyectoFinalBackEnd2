
const transformMongoArray = (array) => {
    for (let i in array){
        array[i].id = array[i]._id.toString()
        delete array[i]._id
    }
}


export default   transformMongoArray