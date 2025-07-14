import 'dotenv/config' // Carga las variables de entorno definidas en un archivo .env (por ejemplo, el puerto)
import express from 'express' // Importa Express, el framework principal del servidor

// Importa las rutas para profesores, cursos y salas
import profesorRoutes from './routes/profesor.route.js'
import cursoRoutes from './routes/curso.route.js'
import salaRoutes from './routes/sala.route.js'

const app = express() // Crea una instancia de la aplicación Express
app.use(express.json()) // Middleware para habilitar el parseo de JSON en las solicitudes
const PORT = process.env.PORT || 3000 // Define el puerto en el que se ejecutará el servidor, tomando el valor de la variable de entorno o 3000 por defecto

// Monta las rutas para profesores en la ruta base /profesores /cursos y /salas
app.use('/profesores', profesorRoutes) 
app.use('/cursos', cursoRoutes)
app.use('/salas', salaRoutes)

// Inicia el servidor y escucha en el puerto definido
// Muestra en consola la URL local cuando el servidor se pone en marcha
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`))
