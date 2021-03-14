import express from 'express'
import {getExercises, createExercise, deleteExercise, patchExercise} from '../controllers/exercises.js'

const router = express.Router()

router.get('/', getExercises)
router.post('/', createExercise)
router.delete('/:id', deleteExercise)
router.patch('/:id', patchExercise)

export default router