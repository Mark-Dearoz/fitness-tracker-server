import mongoose from 'mongoose'

const exerciseSchema = mongoose.Schema({
    muscleGroupId: {type: mongoose.Schema.Types.ObjectId, ref: 'MuscleGroup'},
    exercise: String
})

const exerciseMessage = mongoose.model('Exercise', exerciseSchema)
export default exerciseMessage