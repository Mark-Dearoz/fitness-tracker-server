import express from 'express'
import {getWorkouts, createWorkout} from '../controllers/workouts.js'

const router = express.Router()

router.get('/', getWorkouts)
router.post('/', createWorkout)

export default router