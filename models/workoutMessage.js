import mongoose from 'mongoose'

const workoutSchema = mongoose.Schema({
    parentId: {type: mongoose.Types.ObjectId, ref: 'Schedule'},
    exercise: {type: mongoose.Types.ObjectId, ref: 'Exercise'},
    sets: Number,
    reps: Number,
    weight: Number
})

const workoutMessage = mongoose.model('Workout', workoutSchema)
export default workoutMessage