// Importa el Router de Express para definir rutas
import { Router } from 'express'

// Importa el controlador de profesores que contiene la lógica para cada ruta
import { ProfesorController } from '../controllers/profesor.controller.js'

// Crea una nueva instancia de Router
const router = Router()

// Define la ruta GET '/' para obtener todos los profesores
router.get('/', ProfesorController.getAll)

// Define la ruta POST '/' para crear un nuevo profesor
router.post('/', ProfesorController.create)

// Define la ruta PUT '/:id' para actualizar un profesor específico por su ID
router.put('/:id', ProfesorController.update)

// Define la ruta DELETE '/:id' para eliminar un profesor específico por su ID
router.delete('/:id', ProfesorController.delete)

// Exporta el router para usarlo en otros archivos, por ejemplo al montarlo en la app principal
export default router