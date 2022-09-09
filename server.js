// const http = require('http');
// const { promises } = require('stream');

// const server = http.createServer((peticion, respuesta)=>{
//     // respuesta.statusCode = 200
//     // respuesta.setHeader('Content-Type', 'Text/plain')
//     // console.log(peticion)
//     // respuesta.end('Hola Mundo')
    
//     // const hora = parseInt(moment().format('HH:mm:ss'))
//     // console.log(hora)
//     // if (hora >= 6 && hora <=12){
//     //     respuesta.end('<h1>Buenos dias</h1>')
//     // }
//     const hora = new Date();
//     const mostrarHora = hora.getHours();

//     if (mostrarHora > 6 && mostrarHora < 12) {
//     respuesta.end("<h1>Buenos Dias!<h1>");
//     } else if (mostrarHora > 13 && mostrarHora < 19) {
//     respuesta.end("<h1>Buenas Tardes!<h1>");
//     } else {
//     respuesta.end("<h1>Buenas Noches!<h1>");
//     }


// })

// const port = 8080

// const connectServer = server.listen(port, ()=>{
//     console.log(`Servidor corriendo en el puesto ${connectServer.address().port}`)
// })


const express = require ('express')
console.log(express)

const app = express()

let count = 0

app.get('/',(req, res)=>{
    res.send('<h1  style="color: blue">Bienvenidos al servidor Express</h1>')
})

app.get('/visitas',(req, res)=>{
    count++
    res.send({mensaje: 'La cantidad de visitas es', count })
})

app.get('/fyh', ()=>{

})


const PORT =4000
const server = app.listen(PORT, ()=>{
    // if (err) console.log(err)
    console.log(`listening on port ${server.address().port}`)
})

server.on('error', (err)=> console.log(err))
