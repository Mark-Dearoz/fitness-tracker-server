import express from 'express'
import {getMax} from '../controllers/max.js'

const router = express.Router()


router.get('/:id', getMax)

export default router