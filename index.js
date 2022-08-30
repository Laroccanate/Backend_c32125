

class Usuario{
    constructor (nombre, apellido, libros, mascotas){
    this.nombre= nombre
    this.apellido= apellido
    this.libros= libros
    this.mascotas= mascotas
}



getFullName(){
    console.log( `Nombre: ${this.nombre}, Apellido: ${this.apellido}` )
}

addMascotas(nuevaMascota){
    this.mascotas.push(nuevaMascota)    
    console.log(this.mascotas)
}


countMascotas(){
    console.log(`El total de mascotas ingresadas es: ${this.mascotas.length}`)
}


addBook(nombre, autor){
this.libros.push({nombre: nombre, autor: autor})
//console.log(this.libros)
}

getBookName(){    
    console.log(this.libros.map(nombres=>nombres.nombre))    

}


}

const usuario1 = new Usuario('Nate', 'Larocca', [{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}] , ['perro', 'gato'])


console.log(usuario1)

usuario1.getFullName()
usuario1.getBookName()
usuario1.countMascotas()
usuario1.addMascotas('Buho')
usuario1.addBook('A clock work Orange', 'Stanley Kubrick')
