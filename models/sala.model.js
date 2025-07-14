// Importa las funciones para leer y escribir en el archivo JSON que actúa como base de datos
import { readData, writeData } from './database.model.js'

// Define el modelo SalaModel con funciones para gestionar salas (CRUD)
export const SalaModel = {
  
  // Obtiene todas las salas leyendo los datos desde el archivo
  getAll: () => readData().salas,

  // Crea una nueva sala
  create: (nuevo) => {
    const data = readData() // Lee los datos actuales desde el archivo
    // Asigna un ID al nuevo registro: si hay salas, usa el último ID + 1, si no, empieza en 1
    nuevo.id = data.salas.length ? data.salas.at(-1).id + 1 : 1
    data.salas.push(nuevo) // Agrega la nueva sala al arreglo
    writeData(data) // Guarda los datos actualizados en el archivo
    return nuevo // Devuelve la nueva sala creada
  },

  // Actualiza una sala existente por su ID
  update: (id, cambios) => {
    const data = readData() // Lee los datos actuales
    const index = data.salas.findIndex(s => s.id === id) // Busca el índice de la sala con ese ID
    if (index === -1) return null // Si no se encuentra, retorna null
    // Fusiona los datos actuales con los cambios recibidos
    data.salas[index] = { ...data.salas[index], ...cambios }
    writeData(data) // Guarda los datos actualizados
    return data.salas[index] // Devuelve la sala actualizada
  },

  // Elimina una sala por su ID
  delete: (id) => {
    const data = readData() // Lee los datos actuales
    const originalLength = data.salas.length // Guarda la cantidad original de salas
    // Filtra el arreglo para excluir la sala con el ID dado
    data.salas = data.salas.filter(s => s.id !== id)
    // Si no se eliminó ninguna sala, retorna false
    if (data.salas.length === originalLength) return false
    writeData(data) // Guarda el nuevo estado de los datos
    return true // Indica que la sala fue eliminada correctamente
  }
}


