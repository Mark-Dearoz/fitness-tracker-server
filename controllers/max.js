import mongoose from 'mongoose'
import workoutMessage from '../models/workoutMessage.js'
import {calculateBest} from '../calculateBest.js'


export const getMax = async (req, res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message: 'Invalid Exercise ID'})
    try{
        const workouts = await workoutMessage.find({exercise: id})
        if(workouts.length === 0) return res.status(204).json()
        const bestLift = calculateBest(workouts)
        res.status(200).json({workout: workouts[bestLift.index], max: bestLift.max})
    }catch(error){
        res.status(400).json({message: error.message})
    }

}