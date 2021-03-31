import express from 'express'
import {getWorkouts, createWorkout, deleteWorkout, patchWorkout, getWeek, getWeightData, getRepetitionData, getVolumeData} from '../controllers/workouts.js'

const router = express.Router()

router.get('/', getWorkouts)
router.post('/', createWorkout)
router.delete('/:id', deleteWorkout)
router.patch('/:id', patchWorkout)
router.get('/week/:number', getWeek)
router.get('/data/weight/:id', getWeightData)
router.get('/data/repetition/:id', getRepetitionData)
router.get('/data/volume/:id', getVolumeData)
export default router