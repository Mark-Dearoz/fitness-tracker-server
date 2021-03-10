import express from 'express'
import {getDays} from '../controllers/days.js'

const router = express.Router()


router.get('/', getDays)

export default router