// Importa el modelo SalaModel que contiene la lógica para manipular los datos de las salas
import { SalaModel } from '../models/sala.model.js'

// Define el controlador SalaController con los métodos para manejar las operaciones CRUD sobre salas
export const SalaController = {

  // Maneja la solicitud GET para obtener todas las salas
  // Responde con el arreglo completo de salas en formato JSON
  getAll: (req, res) => res.json(SalaModel.getAll()),

  // Maneja la solicitud POST para crear una nueva sala
  // Usa los datos enviados en el cuerpo de la solicitud para crear la sala
  // Devuelve la nueva sala creada con código de estado 201 (Creado)
  create: (req, res) => {
    const nuevo = SalaModel.create(req.body)
    res.status(201).json(nuevo)
  },

  // Maneja la solicitud PUT para actualizar una sala por su ID
  // Convierte el parámetro `id` de la URL a número y pasa los cambios al modelo
  // Si no se encuentra la sala, responde con 404; si se actualiza, devuelve la sala modificada
  update: (req, res) => {
    const actualizado = SalaModel.update(+req.params.id, req.body)
    if (!actualizado) return res.status(404).json({ msg: 'No encontrado' })
    res.json(actualizado)
  },

  // Maneja la solicitud DELETE para eliminar una sala por su ID
  // Si no se encuentra la sala, responde con 404
  // Si se elimina correctamente, devuelve un mensaje confirmando la eliminación
  delete: (req, res) => {
    const eliminado = SalaModel.delete(+req.params.id)
    if (!eliminado) return res.status(404).json({ msg: 'No encontrado' })
    res.json({ msg: 'Eliminado' })
  }
}


