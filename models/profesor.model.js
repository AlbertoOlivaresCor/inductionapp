// Simulamos una "base de datos"
const profesores = [
  { id: 1, nombre: "Juan Pérez" },
  { id: 2, nombre: "Ana Martínez" }
]

export const ProfesorModel = {
  findAll: () => profesores
}

/*

export const ProfesorModel = {
  findAll: () => profesores,

  findById: (id) => profesores.find(p => p.id === id),

  create: (nombre) => {
    const nuevo = { id: nextId++, nombre }
    profesores.push(nuevo)
    return nuevo
  },

  update: (id, nombre) => {
    const index = profesores.findIndex(p => p.id === id)
    if (index === -1) return null
    profesores[index].nombre = nombre
    return profesores[index]
  },

  delete: (id) => {
    const index = profesores.findIndex(p => p.id === id)
    if (index === -1) return null
    const eliminado = profesores.splice(index, 1)
    return eliminado[0]
  }
}

*/