import express from 'express'
import {getWorkouts, createWorkout, deleteWorkout, patchWorkout, getWeek, getWeightData, getRepetitionData, getVolumeData} from '../controllers/workouts.js'
import auth from '../middleware/auth.js'
const router = express.Router()

router.get('/', getWorkouts)
router.post('/', auth, createWorkout)
router.delete('/:id', deleteWorkout)
router.patch('/:id', patchWorkout)
router.get('/week/:number', auth, getWeek)
router.get('/data/weight/:id', auth, getWeightData)
router.get('/data/repetition/:id', auth, getRepetitionData)
router.get('/data/volume/:id', auth, getVolumeData)
export default router