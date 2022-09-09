//Entregable Clase 4//
const fs = require ('fs')

class Contenedor{
    constructor (rutaArchivo){
        this.rutaArchivo = rutaArchivo
    }

    async #leerUnArchivo(){
        try {
            const contenido = await fs.promises.readFile(this.rutaArchivo, 'utf-8')
            const contenidoParseado = JSON.parse(contenido)
            // console.log(contenidoParseado)
            return contenidoParseado
        } catch (error) {
            console.log(error)
        }        
    }

    async save(obj){
        const contenidoArchivo = await this.#leerUnArchivo()
        if (contenidoArchivo.length !== 0) {
            await fs.promises.writeFile(this.rutaArchivo, JSON.stringify ([...contenidoArchivo, {...obj,id: contenidoArchivo[contenidoArchivo.length - 1].id + 1}], null, 2),'utf-8')
        } else {
            await fs.promises.writeFile(this.rutaArchivo, JSON.stringify( [ {...obj, id: 1} ], null, 2), 'utf-8')            
        }
        console.log(contenidoArchivo)
    }

    async getById(id){
        const contenidoArchivo = await this.#leerUnArchivo()
        let itemId = contenidoArchivo.filter (i => i.id ==id )
        if (itemId.length == 0 ){
            console.log(`No se puede obtener el dato con el id: ${id}`) 
        }console.log(itemId) 
    }

    async getAll(){
        const contenidoArchivo = await this.#leerUnArchivo()
        return (contenidoArchivo)
    }
    

    async deleteById(id){
        const contenidoArchivo = await this.#leerUnArchivo()
        let itemId = contenidoArchivo.filter (i => i.id !=id )
        try {
            fs.promises.writeFile(this.rutaArchivo,JSON.stringify(itemId,null,2))
            console.log(`Se ha borrado el Id: ${id}`)
        } catch (error) {
            console.log(`No se puede borrar ese registro`)
        }
    }

    async deleteAll(){
        try {
            await fs.promises.writeFile(this.rutaArchivo,JSON.stringify([],null,2))
            console.log("Se han borrado todos los archivos")
        } catch (error) {
            console.log("No se pueden borrar los datos")
        }
    }

}
module.exports = Contenedor
// const contenedor = new Contenedor ('./productos.txt')
// contenedor.save({nombre: 'producto 1', precio:100})
// contenedor.getAll()
// contenedor.getById(36)
// contenedor.deleteById(5)
//  contenedor.deleteAll()


