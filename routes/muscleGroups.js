import express from 'express'
import {getMuscleGroups, createtMuscleGroup, deleteMuscleGroup, patchMuscleGroup} from '../controllers/muscleGroups.js'

const router = express.Router()

router.get('/', getMuscleGroups)
router.post('/', createtMuscleGroup)
router.delete('/:id', deleteMuscleGroup)
router.patch('/:id',patchMuscleGroup )
export default router