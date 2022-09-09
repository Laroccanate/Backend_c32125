

const express = require ('express')
const app = express()
const Contenedor = require ('./Container')
const PORT = 8080
const productos =  new Contenedor('./productos.txt')
const traerProductos = productos.getAll()


app.get('/productos', async (req, res)=>{
    const resultado = await traerProductos
    res.send(resultado)
})

app.get("/productoRandom", async (req, res)=>{
    const resultado = await traerProductos
    const random = resultado[Math.floor(Math.random()*resultado.length)]
    res.send(random)
}) 





app.listen(PORT, ()=> console.log('El servidor esta funcionando en el puerto 8080'))