// Importa el Router de Express para definir rutas
import { Router } from 'express'

// Importa el controlador CursoController que contiene la lógica para manejar cada ruta
import { CursoController } from '../controllers/curso.controller.js'

// Crea una nueva instancia del router
const router = Router()

// Ruta GET '/' - Obtiene todos los cursos
// Llama al método getAll del controlador
router.get('/', CursoController.getAll)

// Ruta POST '/' - Crea un nuevo curso
// Llama al método create del controlador con los datos enviados en el cuerpo de la solicitud
router.post('/', CursoController.create)

// Ruta PUT '/:id' - Actualiza un curso específico por su ID
// Llama al método update del controlador, pasando el ID desde los parámetros de la URL
router.put('/:id', CursoController.update)

// Ruta DELETE '/:id' - Elimina un curso específico por su ID
// Llama al método delete del controlador, pasando el ID desde los parámetros de la URL
router.delete('/:id', CursoController.delete)

// Exporta el router para que pueda ser utilizado en la configuración principal de la app
export default router

