import { ProfesorModel } from "../models/profesor.model.js"

export const getAllProfesores = (req, res) => {
  const profesores = ProfesorModel.findAll()
  res.json({ ok: true, data: profesores })
}

/*

export const getAllProfesores = (req, res) => {
  const profesores = ProfesorModel.findAll()
  res.json({ ok: true, data: profesores })
}

export const getProfesorById = (req, res) => {
  const id = parseInt(req.params.id)
  const profesor = ProfesorModel.findById(id)
  if (!profesor) {
    return res.status(404).json({ ok: false, msg: "Profesor no encontrado" })
  }
  res.json({ ok: true, data: profesor })
}

export const createProfesor = (req, res) => {
  const { nombre } = req.body
  if (!nombre) {
    return res.status(400).json({ ok: false, msg: "Nombre requerido" })
  }
  const nuevo = ProfesorModel.create(nombre)
  res.status(201).json({ ok: true, data: nuevo })
}

export const updateProfesor = (req, res) => {
  const id = parseInt(req.params.id)
  const { nombre } = req.body
  const actualizado = ProfesorModel.update(id, nombre)
  if (!actualizado) {
    return res.status(404).json({ ok: false, msg: "Profesor no encontrado" })
  }
  res.json({ ok: true, data: actualizado })
}

export const deleteProfesor = (req, res) => {
  const id = parseInt(req.params.id)
  const eliminado = ProfesorModel.delete(id)
  if (!eliminado) {
    return res.status(404).json({ ok: false, msg: "Profesor no encontrado" })
  }
  res.json({ ok: true, msg: "Profesor eliminado", data: eliminado })
}

*/