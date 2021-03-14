import express from 'express'
import {getSchedules, getWeek} from '../controllers/schedules.js'
const router = express.Router()

router.get('/', getSchedules)
router.get('/week', getWeek)
router.get('/week/:page', getWeek)

export default router