import express from 'express'
import {getMax} from '../controllers/max.js'
import auth from '../middleware/auth.js'
const router = express.Router()


router.get('/:id', auth, getMax)

export default router