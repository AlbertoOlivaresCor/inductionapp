// Importa el modelo ProfesorModel desde la ruta especificada
import { ProfesorModel } from '../models/profesor.model.js'

// Define el controlador ProfesorController con las operaciones CRUD
export const ProfesorController = {

  // Obtiene todos los profesores y los devuelve en formato JSON
  getAll: (req, res) => res.json(ProfesorModel.getAll()),

  // Crea un nuevo profesor utilizando los datos enviados en el cuerpo de la solicitud
  // Devuelve el nuevo profesor creado con código de estado 201 (Creado)
  create: (req, res) => {
    const nuevo = ProfesorModel.create(req.body)
    res.status(201).json(nuevo)
  },

  // Actualiza un profesor existente por ID
  // Si no se encuentra, responde con 404 y un mensaje de "No encontrado"
  // Si se actualiza correctamente, devuelve el profesor actualizado
  update: (req, res) => {
    const actualizado = ProfesorModel.update(+req.params.id, req.body)
    if (!actualizado) return res.status(404).json({ msg: 'No encontrado' })
    res.json(actualizado)
  },

  // Elimina un profesor por ID
  // Si no se encuentra, responde con 404 y un mensaje de "No encontrado"
  // Si se elimina correctamente, devuelve un mensaje de confirmación
  delete: (req, res) => {
    const eliminado = ProfesorModel.delete(+req.params.id)
    if (!eliminado) return res.status(404).json({ msg: 'No encontrado' })
    res.json({ msg: 'Eliminado' })
  }
}
