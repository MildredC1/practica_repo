const path = require('path') // Modulo de Node para manejar rutas de directorios
const express = require('express')
const app = express()


const PORT = 3000
const HOST = "localhost"

// Configurar los Middleware's:______________________________________________________________
// Middleware global para el 'Logger' 
app.use((req, res, next) => {
    console.log(`Logger: [${new Date().toISOString()}] - Method: ${req.method} - Desde: ${req.url}`)
    next()
})

// Middleware para parsear JSON
app.use(express.json())
// Middleware trabajar con archivos estaticos publicos
app.use(express.static(path.join(__dirname, 'public')))

// Configurar las peticiones:________________________________________________________________
app.get("/", (req, res) => {
    res.send(`<h1>Bienvenido al Servidor Express</h1>`)
})

app.listen(PORT, HOST, () => {
    console.log(`Servidor corriendo en http://${HOST}:${PORT}`)
})