import express from 'express'
import {getDays, createDay, deleteDay, getWeek} from '../controllers/days.js'

const router = express.Router()


router.get('/', getDays)
router.get('/week', getWeek)
router.post('/', createDay)
router.delete('/:id', deleteDay)


export default router