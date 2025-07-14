// Importa el modelo CursoModel que contiene la lógica para acceder y modificar los cursos
import { CursoModel } from '../models/curso.model.js'

// Define el controlador CursoController con métodos para manejar solicitudes HTTP relacionadas a cursos
export const CursoController = {

  // Maneja una solicitud GET para obtener todos los cursos
  // Responde con un arreglo de cursos en formato JSON
  getAll: (req, res) => res.json(CursoModel.getAll()),

  // Maneja una solicitud POST para crear un nuevo curso
  // Toma los datos del cuerpo de la solicitud, crea el curso y responde con el nuevo curso creado
  // Establece el código de estado HTTP en 201 (Creado)
  create: (req, res) => {
    const nuevo = CursoModel.create(req.body)
    res.status(201).json(nuevo)
  },

  // Maneja una solicitud PUT para actualizar un curso existente por su ID
  // Si el curso no existe, responde con estado 404 y un mensaje de "No encontrado"
  // Si la actualización es exitosa, responde con el curso actualizado
  update: (req, res) => {
    const actualizado = CursoModel.update(+req.params.id, req.body)
    if (!actualizado) return res.status(404).json({ msg: 'No encontrado' })
    res.json(actualizado)
  },

  // Maneja una solicitud DELETE para eliminar un curso por su ID
  // Si el curso no se encuentra, responde con estado 404
  // Si se elimina correctamente, responde con un mensaje confirmando la eliminación
  delete: (req, res) => {
    const eliminado = CursoModel.delete(+req.params.id)
    if (!eliminado) return res.status(404).json({ msg: 'No encontrado' })
    res.json({ msg: 'Eliminado' })
  }
}

