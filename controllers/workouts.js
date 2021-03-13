import mongoose from 'mongoose'
import workoutMessage from '../models/workoutMessage.js'

export const getWorkouts = async (req, res) =>{
    try{
        const workoutsMessage = await workoutMessage.find().populate('exercise')

        res.status(200).json(workoutsMessage)
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

export const createWorkout = async (req, res) =>{
    const workout = req.body
    const newWorkout = new workoutMessage(workout)
    if(!mongoose.Types.ObjectId.isValid(newWorkout.exercise)) return res.status(400).json({message: 'Exercise ID is invalid'})
    //if(!mongoose.Types.ObjectId.isValid(newWorkout.parentId)) return res.status(400).json({message: 'Parent ID is invalid'})
    try{
        await newWorkout.save()
        
        res.status(201).json(newWorkout)
    }catch(error){
        res.status(409).json({message: error.message})
    }
}