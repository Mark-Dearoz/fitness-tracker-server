import mongoose from 'mongoose'

workoutCardSchema = mongoose.Schema({
    lift: String,
    sets: Number,
    reps: Number,
    weight: Number
})

const workoutCardMessage = mongoose.model('WorkoutCard', workoutCardSchema)
export default workoutCardMessage