import mongoose from 'mongoose'

workoutCardSchema = mongoose.Schema({
    lift: String,
    sets: Number,
    reps: Number,
    weight: Number,
    parent: {type: mongoose.Schema.Types.ObjectId, ref: 'SplitCard'}
})

const WorkoutCardMessage = mongoose.model('WorkoutCard', workoutCardSchema)
export default WorkoutCardMessage