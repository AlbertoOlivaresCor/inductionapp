import { CursoModel } from '../models/curso.model.js'

export const getAllCursos = (req, res) => {
  const cursos = CursoModel.findAll()
  res.json({ ok: true, data: cursos })
}
