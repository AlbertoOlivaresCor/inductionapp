import { SalaModel } from '../models/sala.model.js'

export const getAllSalas = (req, res) => {
  const salas = SalaModel.findAll()
  res.json({ ok: true, data: salas })
}
