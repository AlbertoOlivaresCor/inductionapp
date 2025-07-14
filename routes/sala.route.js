// Importa el Router de Express para definir un conjunto de rutas relacionadas
import { Router } from 'express'

// Importa el controlador SalaController que contiene la lógica para manejar las operaciones sobre salas
import { SalaController } from '../controllers/sala.controller.js'

// Crea una nueva instancia del router
const router = Router()

// Define la ruta GET '/' para obtener todas las salas
// Llama al método getAll del controlador
router.get('/', SalaController.getAll)

// Define la ruta POST '/' para crear una nueva sala
// Llama al método create del controlador con los datos enviados en el cuerpo de la solicitud
router.post('/', SalaController.create)

// Define la ruta PUT '/:id' para actualizar una sala específica por su ID
// Llama al método update del controlador, usando el ID pasado por parámetro en la URL
router.put('/:id', SalaController.update)

// Define la ruta DELETE '/:id' para eliminar una sala específica por su ID
// Llama al método delete del controlador, usando el ID pasado por parámetro en la URL
router.delete('/:id', SalaController.delete)

// Exporta el router para que pueda ser utilizado en la configuración principal del servidor (por ejemplo, en app.js)
export default router
