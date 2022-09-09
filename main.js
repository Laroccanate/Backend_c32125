


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


//////////////////


console.log('Hola Mundo')



function random(min, max) {
    console.log(Math.ceil((Math.random() * (20 - 1 + 1)) + 1))
}


let numeros = 0;

const mostrarNumeros =()=> Math.ceil(Math.random()*1000);

for (let i = 0; i < 20; i++) {
    console.log(mostrarNumeros());
}
