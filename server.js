import 'dotenv/config'
import express from 'express'

import cursoRouter from './routes/curso.route.js'
import profesorRouter from './routes/profesor.route.js'
import salaRouter from './routes/sala.route.js'

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3000

// Rutas
app.use('/profesores', profesorRouter)
app.use('/cursos', cursoRouter)
app.use('/salas', salaRouter)

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`))
