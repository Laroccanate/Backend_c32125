

// class Usuario{
//     constructor (nombre, apellido, libros, mascotas){
//     this.nombre= nombre
//     this.apellido= apellido
//     this.libros= libros
//     this.mascotas= mascotas
// }



// getFullName(){
//     console.log( `Nombre: ${this.nombre}, Apellido: ${this.apellido}` )
// }

// addMascotas(nuevaMascota){
//     this.mascotas.push(nuevaMascota)    
//     console.log(this.mascotas)
// }


// countMascotas(){
//     console.log(`El total de mascotas ingresadas es: ${this.mascotas.length}`)
// }


// addBook(nombre, autor){
// this.libros.push({nombre: nombre, autor: autor})
// //console.log(this.libros)
// }

// getBookName(){    
//     console.log(this.libros.map(nombres=>nombres.nombre))    

// }


// }

// const usuario1 = new Usuario('Nate', 'Larocca', [{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}] , ['perro', 'gato'])


// console.log(usuario1)

// usuario1.getFullName()
// usuario1.getBookName()
// usuario1.countMascotas()
// usuario1.addMascotas('Buho')
// usuario1.addBook('A clock work Orange', 'Stanley Kubrick')




//CLASE 4//

//  const fs = require ('fs')


// fs.writeFileSync('./data.txt', 'hola contenido \n', 'utf-8')

// fs.appendFileSync('./data.txt', 'Agregagar contenido \n', 'utf-8')

// // console.log(fs)
// try {
//     const data = fs.readFileSync('data.txt', 'utf8')
//     console.log(data)
// } catch (error) {
//     console.log(error)
// }

// fs.unlinkSync('data.txt')

//  fs.writeFile('./data.txt', 'Creando contenido y archivo \n', 'utf-8', (err)=>{
//     if(err){
// console.log(err)
//     }else{
// console.log('Archivo creado')
//     }
//  })


// fs.appendFile('data.txt', 'Agregando contenido nueco', 'utf-8', err =>{
//     if(err){
//     console.log(err)
// }else{
//     console.log('Estoy aqui')
// }
// })




// fs.readFile('data.txt', 'utf8', (err, data)=>{
//     if (err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })




// fs.unlink('./data.txt', err=>{
//     if(err){
//         console.log(err)
//     }else{
    //         console.log('Archivo eliminado')
//     }
// })


 
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
        console.log(contenidoArchivo)
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

const contenedor = new Contenedor ('./productos.txt')
contenedor.save({nombre: 'producto 1', precio:100})
// contenedor.getAll()
// contenedor.getById(36)
// contenedor.deleteById(5)
//  contenedor.deleteAll()
