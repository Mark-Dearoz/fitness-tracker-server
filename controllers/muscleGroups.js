import mongoose from 'mongoose'
import muscleGroupMessage from '../models/muscleGroupMessage.js'

export const getMuscleGroups = async (req, res) =>{
    try{
        const muscleGroupMessages = await muscleGroupMessage.find().populate('exercises')
        res.status(200).json(muscleGroupMessages)
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

export const createtMuscleGroup = async (req, res) =>{
    const muscleGroup = req.body

    const newMuscleGroup = new muscleGroupMessage(muscleGroup)
    try{
        await newMuscleGroup.save()

        res.status(201).json(newMuscleGroup)
    }catch(error){
        res.status(409).json({message: message})
    }
}

export const deleteMuscleGroup = async (req, res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({message: 'ID is invalid'})
    try{
        await muscleGroupMessage.findByIdAndDelete(id)

        res.status(200).json('Deleted Sucessfully')
    }catch(error){
        res.status(404).json({message: 'ID not found'})
    }
}