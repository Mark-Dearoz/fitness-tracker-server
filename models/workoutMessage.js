import mongoose from 'mongoose'

const workoutSchema = mongoose.Schema({
    date: Date,
    exercise: {type: mongoose.Types.ObjectId, ref: 'Exercise'},
    sets: Number,
    reps: Number,
    weight: Number
})

const workoutMessage = mongoose.model('Workout', workoutSchema)
export default workoutMessage