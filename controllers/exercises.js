import mongoose from 'mongoose'
import exerciseMessage from '../models/exerciseMessage.js'
import muscleGroupMessage from '../models/muscleGroupMessage.js'

export const getExercises =  async (req, res) =>{
    try{
        const exerciseMessages = await exerciseMessage.find()
        res.status(200).json(exerciseMessages)
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

export const createExercise = async (req, res) =>{
    const exercise = req.body
    const newExercise = new exerciseMessage(exercise)
    if(!mongoose.Types.ObjectId.isValid(newExercise.muscleGroupId)) return res.status(400).json({message: 'ID is invalid'})
    try{
        const muscleGroup = await muscleGroupMessage.findById(newExercise.muscleGroupId)
        if(muscleGroup === null) return res.status(400).json({message: 'ID not found'})
        muscleGroup.exercises = [...muscleGroup.exercises,newExercise._id]
        await muscleGroup.save()
        await newExercise.save()
        res.status(201).json(newExercise)
    }catch(error){
        res.status(409).json({message: error.message})
    }
}

export const deleteExercise = async (req, res) =>{
    const {id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({message: 'ID is invalid'})
    try{
        await exerciseMessage.findByIdAndRemove(id)
        res.status(200).json({message: 'Deleted Sucessfully'})
    }catch(error){
        res.status(400).json({message: error.message})
    }
}

export const patchExercise = async (req, res) =>{
    const {id} = req.params
    const body = req.body
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({message: 'ID is invalid'})
    try{
        await exerciseMessage.findByIdAndUpdate(id, body)
        const updatedExercise = await exerciseMessage.findById(id)
        if(updatedExercise === null) return res.status(400).json({message: 'ID not found'})
        console.log(updatedExercise)
        res.status(200).json(updatedExercise)
    }catch(error){
        res.status(400).json({message: error.message})
    }

}