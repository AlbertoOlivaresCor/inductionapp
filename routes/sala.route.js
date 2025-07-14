import { Router } from 'express'
import { getAllSalas } from '../controllers/sala.controller.js'

const router = Router()

router.get('/', getAllSalas)

export default router
