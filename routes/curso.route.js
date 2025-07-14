import { Router } from 'express'
import { getAllCursos } from '../controllers/curso.controller.js'

const router = Router()

router.get('/', getAllCursos)

export default router
