// Importa las funciones para leer y escribir datos del archivo JSON
import { readData, writeData } from './database.model.js'

// Define el modelo CursoModel con operaciones CRUD sobre los cursos
export const CursoModel = {
  
  // Obtiene todos los cursos desde el archivo JSON
  getAll: () => readData().cursos,

  // Crea un nuevo curso
  create: (nuevo) => {
    const data = readData() // Lee todos los datos actuales
    // Asigna un nuevo ID al curso: si hay cursos, toma el último ID y suma 1; si no, empieza desde 1
    nuevo.id = data.cursos.length ? data.cursos.at(-1).id + 1 : 1
    data.cursos.push(nuevo) // Agrega el nuevo curso al arreglo
    writeData(data) // Guarda los datos actualizados en el archivo
    return nuevo // Devuelve el nuevo curso creado
  },

  // Actualiza un curso existente por su ID
  update: (id, cambios) => {
    const data = readData() // Lee los datos actuales
    // Busca el índice del curso con el ID dado
    const index = data.cursos.findIndex(c => c.id === id)
    if (index === -1) return null // Si no se encuentra, retorna null
    // Combina los datos actuales del curso con los cambios recibidos
    data.cursos[index] = { ...data.cursos[index], ...cambios }
    writeData(data) // Guarda los cambios en el archivo
    return data.cursos[index] // Devuelve el curso actualizado
  },

  // Elimina un curso por su ID
  delete: (id) => {
    const data = readData() // Lee los datos actuales
    const originalLength = data.cursos.length // Guarda la longitud original del arreglo
    // Filtra el arreglo de cursos, eliminando el que tenga el ID dado
    data.cursos = data.cursos.filter(c => c.id !== id)
    if (data.cursos.length === originalLength) return false // Si no se eliminó nada, retorna false
    writeData(data) // Guarda los datos actualizados sin el curso eliminado
    return true // Indica que se eliminó correctamente
  }
}
