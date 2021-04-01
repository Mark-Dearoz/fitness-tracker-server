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
    const id = req.userId
    const newWorkout = new workoutMessage({...workout, userId: id})
    if(!mongoose.Types.ObjectId.isValid(newWorkout.exercise)) return res.status(404).json({message: 'Exercise ID is invalid'})
    try{
        await newWorkout.save()
        const populatedWorkout = await workoutMessage.findById(newWorkout._id).populate({path: 'exercise', populate: {path: 'muscleGroupId', model: 'MuscleGroup'}})
        res.status(201).json(populatedWorkout)
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
        const updatedWorkout = await workoutMessage.findById(id).populate({path: 'exercise', populate: {path: 'muscleGroupId', model: 'MuscleGroup'}})
        res.status(200).json(updatedWorkout)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}

export const getWeek = async (req, res) => {
    const id = req.userId
    const {number} = req.params
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - 4*parseInt(number) - 3)
    startDate.setUTCHours(0)
    startDate.setUTCMinutes(0)
    startDate.setUTCSeconds(0)
    startDate.setUTCMilliseconds(0)
    const endDate = new Date()
    endDate.setDate(endDate.getDate() - 4*parseInt(number))
    endDate.setUTCHours(23)
    endDate.setUTCMinutes(59)
    endDate.setUTCSeconds(59)
    endDate.setUTCMilliseconds(999)
    try{
        const weekData = await workoutMessage.find({userId: id, date: {$gte: startDate, $lt: endDate}}).populate({path: 'exercise', populate: {path: 'muscleGroupId', model: 'MuscleGroup'}})
        res.status(200).json(weekData)
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

export const getWeightData = async (req, res) => {
    const {id} = req.params
    const userId = req.userId
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message: 'Id is invalid'})
    try{
        const workouts = await workoutMessage.find({userId: userId, exercise : id})
        const data = workouts.map(workout =>  ({x: workout.date.toDateString().slice(4,10), y: workout.weight}))
        res.status(200).json(data)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}

export const getRepetitionData = async (req, res) => {
    const {id} = req.params
    const userId = req.userId
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message: 'Id is invalid'})
    try{
        const workouts = await workoutMessage.find({userId: userId, exercise : id})
        const data = workouts.map(workout =>  ({x: workout.date.toDateString().slice(4,10), y: workout.weight}))
        res.status(200).json(data)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}

export const getVolumeData = async (req, res) => {
    const {id} = req.params
    const userId = req.userId
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message: 'Id is invalid'})
        const workouts = await workoutMessage.find({userId: userId, exercise : id})
        const data = workouts.map(workout =>  ({x: workout.date.toDateString().slice(4,10), y: workout.reps * workout.sets * workout.weight}))
        res.status(200).json(data)
    try{

    }catch(error){
        res.status(400).json({message: error.message})
    }
}