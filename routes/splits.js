import express from 'express'
import {getSplits, createSplit, deleteSplit, patchSplit} from '../controllers/splits.js'

const router = express.Router()

router.get('/', getSplits)

router.post('/' ,createSplit)
router.delete('/:id', deleteSplit)
router.patch('/:id', patchSplit)
export default router