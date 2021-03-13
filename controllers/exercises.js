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
    if(!mongoose.Types.ObjectId.isValid(newExercise.muscleGroupId)) return res.status(400).json({message: 'Invalid is invalid'})
    try{
        console.log(1)
        const muscleGroup = await muscleGroupMessage.findById(newExercise.muscleGroupId)
        console.log(2)
        if(muscleGroup === null) return res.status(400).json({message: 'muscleGroupID not found'})
        console.log(3)
        muscleGroup.exercises = [...muscleGroup.exercises,newExercise._id]
        console.log(4)
        await muscleGroup.save()
        console.log(5)
        await newExercise.save()
        console.log(6)
        res.status(201).json(newExercise)
    }catch(error){
        res.status(409).json({message: error.message})
    }
}