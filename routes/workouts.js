import express from 'express'
import {getWorkouts, createWorkout, deleteWorkout, patchWorkout} from '../controllers/workouts.js'

const router = express.Router()

router.get('/', getWorkouts)
router.post('/', createWorkout)
router.delete('/:id', deleteWorkout)
router.patch('/:id', patchWorkout)
export default router