// Importa las funciones para leer y escribir datos en la base de datos (archivo JSON)
import { readData, writeData } from './database.model.js'


// Objeto que contiene los métodos para manipular los datos de profesores
export const ProfesorModel = {
  // Obtiene todos los profesores
  getAll: () => readData().profesores,

  // Crea un nuevo profesor y lo agrega a la base de datos
  create: (nuevo) => {
    const data = readData() // Lee todos los datos actuales
    // Asigna un id autoincremental al nuevo profesor
    nuevo.id = data.profesores.length ? data.profesores.at(-1).id + 1 : 1
    data.profesores.push(nuevo) // Agrega el nuevo profesor al arreglo
    writeData(data) // Guarda los datos actualizados
    return nuevo // Devuelve el nuevo profesor creado
  },

  // Actualiza los datos de un profesor existente por id
  update: (id, cambios) => {
    const data = readData() // Lee todos los datos actuales
    // Busca el índice del profesor con el id dado
    const index = data.profesores.findIndex(p => p.id === id)
    if (index === -1) return null // Si no existe, retorna null
    // Actualiza los datos del profesor con los cambios recibidos
    data.profesores[index] = { ...data.profesores[index], ...cambios }
    writeData(data) // Guarda los datos actualizados
    return data.profesores[index] // Devuelve el profesor actualizado
  },

  // Elimina un profesor por id
  delete: (id) => {
    const data = readData() // Lee todos los datos actuales
    const originalLength = data.profesores.length // Guarda la cantidad original de profesores
    // Filtra el arreglo para eliminar el profesor con el id dado
    data.profesores = data.profesores.filter(p => p.id !== id)
    // Si la longitud no cambió, no se eliminó ningún profesor
    if (data.profesores.length === originalLength) return false
    writeData(data) // Guarda los datos actualizados
    return true // Retorna true si se eliminó correctamente
  }
}