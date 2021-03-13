import express from 'express'
import {getMuscleGroups, createtMuscleGroup, deleteMuscleGroup} from '../controllers/muscleGroups.js'

const router = express.Router()

router.get('/', getMuscleGroups)
router.post('/', createtMuscleGroup)
router.delete('/:id', deleteMuscleGroup)

export default router