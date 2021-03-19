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
    if(!mongoose.Types.ObjectId.isValid(newWorkout.exercise)) return res.status(404).json({message: 'Exercise ID is invalid'})
    try{
        await newWorkout.save()
        
        res.status(201).json(newWorkout)
    }catch(error){
        res.status(409).json({message: error.message})
    }
}

export const deleteWorkout = async (req, res) =>{
    const {id} = req.params
    try{
        await workoutMessage.findByIdAndRemove(id)

        res.status(200).json({message: 'Deleted Sucessfully'})
    }catch(error){
        res.status(400).json({message: error.message})
    }
}

export const patchWorkout = async (req, res) =>{
    const {id} = req.params
    const body = req.body
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message: 'Id is invalid'})
    try{
        await workoutMessage.findByIdAndUpdate(id, body)
        const updatedWorkout = await workoutMessage.findById(id)
        if(updateWorkout == null) return res.status(404).json({message: 'ID not found'})
        res.status(200).json(updatedWorkout)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}